<script lang="ts">
	import { page } from '$app/stores';
	import Lottie from '$1/effects/player-async.svelte';
	import { ReviewsCard } from '$1/reviews';
	import { dispatch } from '$lib/util';
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	let query: Promise<any[]>;
	let autoplay = false;
	let className = '';
	let embla: null | EmblaCarouselType = null;
	let chunkSize = 3;

	function chunk(a: any[], group: number) {
		const chunks = [];
		for (let i = 0; i < a.length; i += group) {
			chunks.push(a.slice(i, i + group));
		}
		return chunks;
	}

	function init(e: CustomEvent<EmblaCarouselType>) {
		embla = e.detail;

		const container = e.detail.containerNode();
		dispatch(container, 'embla', {
			next() {
				autoplay = true;
				e.detail.scrollNext();
			},

			prev() {
				autoplay = true;
				e.detail.scrollPrev();
			}
		});

		e.detail.on('pointerDown', function () {
			autoplay = true;
		});

		e.detail.on('settle', function () {
			autoplay = false;
		});
	}

	function resize(node: HTMLDivElement) {
		const observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(() => {
					const bb = node.getBoundingClientRect();
					chunkSize = !!bb.height ? 3 : 1;
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1
			}
		);

		observer.observe(node);
	}

	onDestroy(() => {
		if (embla) embla.destroy();
	});

	onDestroy(
		page.subscribe((p) => {
			query = p.data.reviews;
		})
	);

	export { className as class };
</script>

<div transition:fade>
	<div class="{className} relative">
		<div class="hidden md:block absolute top-0 left-0 bottom-0" use:resize />
		{#if query}
			{#await query then reviews}
				{#if reviews}
					<div class="embla overflow-hidden mb-8" use:emblaCarouselSvelte on:emblaInit={init}>
						<div class="embla__container flex">
							{#each chunk(reviews, chunkSize) as c}
								<div class="embla__slide grid grid-cols-1 md:grid-cols-3 gap-4">
									{#each c as review}
										<ReviewsCard {review} class="md:last:mr-4" />
									{/each}
								</div>
							{/each}
						</div>
					</div>
					<Lottie src="/projects/1/lottie/pagination.json" {autoplay} loop class="h-4" />
				{/if}
			{/await}
		{/if}
	</div>
</div>

<style lang="postcss">
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
