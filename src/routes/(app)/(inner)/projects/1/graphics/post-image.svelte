<script lang="ts">
	import type { MediaSize, WpPost } from '$lib/wp';
	import dude1 from './dude-1.webp';
	import dude2 from './dude-2.webp';
	import dude3 from './dude-3.webp';
	import dude4 from './dude-4.webp';
	import dude5 from './dude-5.webp';
	import dude6 from './dude-6.webp';

	let className = '';
	let altProp = '';

	export let post: WpPost;
	export let size: MediaSize;
	$: src = getSrc(post, size);
	$: alt = getAlt(post);

	function getSrc(p: WpPost, s: MediaSize): string {
		let media: string | undefined = '';

		try {
			media = p._embedded?.['wp:featuredmedia']?.[0]?.media_details.sizes?.[s]?.source_url;
			if (!media) {
				media = p._embedded?.['wp:featuredmedia']?.[0].source_url;
			}
		} catch (_) {
			// noop.
		}

		if (media) return media;

		return '';
	}

	function getAlt(p: WpPost): string {
		return p._embedded?.['wp:featuredmedia']?.[0].alt_text || altProp;
	}

	export { className as class, altProp as alt };
</script>

{#if src}
	<img class={className} {src} {alt} loading="lazy" />
{/if}
