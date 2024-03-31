import { WORDPRESS } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

/**
 * Request event for when you want to proxy WordPress content.
 */
async function _GET({ params: { slug }, fetch }: RequestEvent) {
	const wpUrl = new URL(WORDPRESS);
	const slugSource = wpUrl.origin + '/wp-content/uploads/' + slug;

	const response = await fetch(slugSource);
	if (response.ok) return new Response(response.body);

	error(404, 'Not found');
}

export async function GET({ params: { slug }, fetch }) {
	let parts = slug.split('-');
	const lastPart = parts.pop();
	let size = '150';
	let seed = parts.join('-');
	parts = seed.split('/');
	seed = parts.pop() || seed;

	if (lastPart?.includes('x')) {
		parts = lastPart.split('.');
		parts.pop();

		parts = parts[0].split('x');

		if (parts.length) size = parts.join('/');
	}

	const response = await fetch(`https://picsum.photos/seed/${seed}/` + size);
	if (response.ok) return new Response(response.body);

	error(404, 'Not found');
}
