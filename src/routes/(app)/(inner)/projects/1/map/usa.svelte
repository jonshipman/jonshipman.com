<script lang="ts">
	import { page } from '$app/stores';
	import { InView } from '$lib/effects';
	import Container from '$1/container.svelte';
	import { listener } from '$lib/util';
	import type { WpPosts } from '$lib/wp';

	let hovervalue = '';
	let className = '';

	let locations: WpPosts<any>;
	$: locations = $page.data.locations;

	function callback(detail: { title: string }) {
		hovervalue = detail.title;
	}

	export { className as class };
</script>

<div class="usa relative {className}" use:listener={{ event: 'hover', callback }}>
	{#if hovervalue}
		<div
			class="absolute top-0 right-0 bg-gray-500 text-gray-100 rounded py-1 px-2 text-xs mt-2 mr-2"
		>
			{hovervalue}
		</div>
	{/if}

	<Container>
		<InView
			class="inview-map relative aspect-video max-md:-translate-x-1/2"
			async={() => import('./usa-async.svelte')}
		/>
	</Container>
</div>

<style lang="postcss">
	.usa :global(.inview-map) {
		width: 200vw;
		margin-left: 50%;
	}

	@screen md {
		.usa :global(.inview-map) {
			width: auto;
			margin-left: 0;
		}
	}
</style>
