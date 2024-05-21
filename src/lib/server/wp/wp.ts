import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { WORDPRESS } from '$env/static/private';
import type {
	WpMedia,
	WpPage,
	WpPost,
	WpPostType,
	WpPosts,
	WpSettings,
	WpTerm
} from '$lib/wp';

interface CacheType {
	post: unknown;
	expires: number;
}

interface PostFilteredOptions {
	page: number;
	limit: number;
	category?: string;
	tag?: string;
	slug?: string;
	postType?: string;
	parent?: number;
	orderby?: string;
	order?: 'asc' | 'desc';
}

export class WpError extends Error {
	statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = statusCode;
	}
}

class JsonError extends Error {}

class Wp {
	static user: string;
	static pass: string;
	static baseUrl: string;
	static memcache: Map<string, CacheType>;
	_fetch: typeof fetch;

	constructor(f = fetch) {
		this._fetch = f;
	}

	fetch: typeof fetch = (input, init = {}) => {
		const controller = new AbortController();
		const response = this._fetch(input, { ...init, signal: init.signal || controller.signal }).then(
			(r) => {
				if (dev) {
					const copyResponse = r.clone();
					console.log(copyResponse);
				}

				return r;
			}
		);

		setTimeout(() => {
			controller.abort();
		}, 30000);

		return response;
	};

	token() {
		const self = this.constructor as typeof Wp;
		const up = `${self.user}:${self.pass}`;
		return Buffer.from(up, 'utf8').toString('base64');
	}

	getcache<T = WpPost>(key: string): T | null {
		const self = this.constructor as typeof Wp;
		if (self.memcache.has(key)) {
			const cache = self.memcache.get(key);

			if (cache && cache.expires > Date.now()) {
				return cache.post as T;
			}
		}

		return null;
	}

	cache<T = WpPost>(key: string, post: T) {
		const self = this.constructor as typeof Wp;
		self.memcache.set(key, { post, expires: Date.now() + 3600000 });
	}

	async processText(response: Response, slash = '\\/'): Promise<string> {
		if (response.ok) {
			const self = this.constructor as typeof Wp;
			const result = await response.text();
			const removeUrl = new URL(self.baseUrl);
			const remove = removeUrl.protocol + slash + slash + removeUrl.host;
			const content = result.replaceAll(remove, '');

			return content;
		}

		throw new WpError('WordPress Error: ' + response.statusText, response.status);
	}

	async process(response: Response) {
		const content = await this.processText(response);

		try {
			return JSON.parse(content);
		} catch (e) {
			if (e instanceof Error) throw new JsonError(e.message);

			throw e;
		}
	}

	async settings(): Promise<WpSettings> {
		const self = this.constructor as typeof Wp;
		const cache = this.getcache<WpSettings>('_settings');
		if (cache) return cache;

		const response = await this.fetch(self.baseUrl, {
			headers: new Headers({
				'content-type': 'application/json'
			})
		});
		const result = await this.process(response);

		if (result.site_logo) {
			const logoMedia = await this.postById<WpMedia>(result.site_logo, 'media');
			if (logoMedia) {
				result.logoMedia = logoMedia;
			}

			this.cache<WpSettings>('_settings', result);
			return result;
		}

		this.cache<WpSettings>('_settings', result);
		return result;
	}

	async category(slug: string): Promise<WpTerm | null> {
		const self = this.constructor as typeof Wp;
		const key = `__category__` + slug;
		const cache = this.getcache<WpTerm>(key);
		if (cache) return cache;

		const url = new URL(self.baseUrl + '/wp/v2/categories');
		url.searchParams.set('slug', slug);
		url.searchParams.set('_embed', '1');

		const response = await this.fetch(url.toString(), {
			headers: new Headers({
				'content-type': 'application/json'
			})
		});

		if (response.ok) {
			const result = await this.process(response);

			if (result.length) {
				this.cache<WpTerm>(key, result[0]);
				return result[0];
			}
		}

		return null;
	}

	async categoryById(id: number): Promise<WpTerm | null> {
		const self = this.constructor as typeof Wp;
		const key = `__categoryid__` + id;
		const cache = this.getcache<WpTerm>(key);
		if (cache) return cache;

		const url = new URL(self.baseUrl + '/wp/v2/categories/' + id);
		url.searchParams.set('_embed', '1');

		const response = await this.fetch(url.toString(), {
			headers: new Headers({
				'content-type': 'application/json'
			})
		});

		if (response.ok) {
			const result = await this.process(response);

			if (result) {
				this.cache<WpTerm>(key, result);
				return result;
			}
		}

		return null;
	}

	async postType(type: string): Promise<WpPostType | null> {
		const self = this.constructor as typeof Wp;
		const key = `__postType__` + type;
		const cache = this.getcache<WpPostType>(key);
		if (cache) return cache;

		const url = new URL(self.baseUrl + '/wp/v2/types/' + type);

		const response = await this.fetch(url.toString(), {
			headers: new Headers({
				'content-type': 'application/json'
			})
		});

		if (response.ok) {
			const result = await this.process(response);

			if (result) {
				this.cache<WpPostType>(key, result);
				return result;
			}
		}

		return null;
	}

	async posts<T extends WpPost>(options: PostFilteredOptions, iteration = 1): Promise<WpPosts<T>> {
		const self = this.constructor as typeof Wp;
		const { page, limit } = options;
		const postType = options.postType || 'posts';

		const url = new URL(self.baseUrl + '/wp/v2/' + postType);
		url.searchParams.set('page', page + '');
		url.searchParams.set('status', 'publish');
		url.searchParams.set('per_page', limit + '');
		url.searchParams.set('_embed', '1');

		if (options.slug) url.searchParams.set('slug', options.slug);

		if (options.category) {
			const categoryQueryUrl = new URL(self.baseUrl + '/wp/v2/categories');
			categoryQueryUrl.searchParams.set('slug', options.category);

			const catResp = await this.fetch(categoryQueryUrl.toString(), {
				headers: new Headers({
					'content-type': 'application/json'
				})
			});
			const catResult = await this.process(catResp);

			if (!catResult || !catResult.length) return { results: [], total: 0 };

			url.searchParams.set('categories', '' + catResult[0].id);
		}

		if (options.tag) {
			const tagQueryUrl = new URL(self.baseUrl + '/wp/v2/tags');
			tagQueryUrl.searchParams.set('slug', options.tag);

			const tagResp = await this.fetch(tagQueryUrl.toString(), {
				headers: new Headers({
					'content-type': 'application/json'
				})
			});
			const tagResult = await this.process(tagResp);

			if (!tagResult || !tagResult.length) return { results: [], total: 0 };

			url.searchParams.set('tags', '' + tagResult[0].id);
		}

		if (options.parent !== undefined) {
			url.searchParams.set('parent', '' + options.parent);
		}

		if (options.orderby !== undefined) {
			url.searchParams.set('orderby', '' + options.orderby);
		}

		if (options.order !== undefined) {
			url.searchParams.set('order', '' + options.order);
		}

		try {
			const response = await this.fetch(url.toString(), {
				headers: new Headers({
					'content-type': 'application/json'
				})
			});
			const totalPageCount = response.headers.get('x-wp-totalpages') || '0';

			return { results: await this.process(response), total: parseInt(totalPageCount) };
		} catch (e) {
			if (e instanceof WpError) throw e;
			if (e instanceof JsonError) {
				if (iteration > 2) throw e;

				// We're going to try again in 5 seconds.
				await new Promise((r) => setTimeout(r, 5000));
				return this.posts(options, iteration + 1);
			}

			throw e;
		}
	}

	async postById<T extends WpPost>(id: number, postType = 'posts'): Promise<null | T> {
		const self = this.constructor as typeof Wp;
		const cache = this.getcache<T>(id + '');
		if (cache) return cache;

		const url = new URL(self.baseUrl + '/wp/v2/' + postType + '/' + id);
		url.searchParams.set('_embed', '1');

		const headers = new Headers({ 'content-type': 'application/json' });
		if (postType === 'media' && self.user && self.pass)
			headers.set('authorization', `Basic ${this.token()}`);

		const response = await this.fetch(url.toString(), { headers });
		if (response.ok) {
			const result = await this.process(response);
			this.cache(id + '', result);
			this.cache(postType + '/' + result.slug, result);
			return result;
		}

		return null;
	}

	async post<T extends WpPost>(slug: string, postType = 'posts'): Promise<null | T> {
		const cacheKey = postType + '/' + slug;
		const cache = this.getcache<T>(cacheKey);
		if (cache) return cache;

		const posts = await this.posts<T>({ page: 1, limit: 1, slug, postType });
		if (posts.total) {
			const post = posts.results[0];
			this.cache(cacheKey, post);
			this.cache(post.id + '', post);
			return post;
		}

		return null;
	}

	pages(options: PostFilteredOptions) {
		return this.posts<WpPage>({ ...options, postType: 'pages' });
	}

	pageById(id: number) {
		return this.postById<WpPage>(id, 'pages');
	}

	page(slug: string) {
		return this.post<WpPage>(slug, 'pages');
	}

	async embed(slug: string) {
		const self = this.constructor as typeof Wp;
		const url = new URL(self.baseUrl);
		const origin = url.origin;

		const response = await this.fetch(`${origin}/${slug}/embed`);

		if (response.ok) {
			return this.processText(response, '/');
		}

		throw new WpError('Not Found', 404);
	}
}

Wp.baseUrl = WORDPRESS;
Wp.user = env.WP_USER || '';
Wp.pass = env.WP_PASS || '';
Wp.memcache = new Map<string, CacheType>();

export default Wp;
