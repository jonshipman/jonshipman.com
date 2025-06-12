<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import { onMount, type Snippet } from 'svelte';
	import type { Picture } from 'vite-imagetools';

	import { assertIsHTMLDivElement } from '$lib/util';

	type PropTypes = {
		title: string;
		category: string;
		href?: string;
		children: Snippet;
		image?: Snippet;
		images?: Array<Picture | string>;
	};

	let opened = $state(false);
	let emblaApi: EmblaCarouselType;

	function OpenSlideshow() {
		opened = true;
	}

	function CloseSlideshow() {
		opened = false;
	}

	const imageSlideClassnames = 'object-contain w-full h-full';

	function emblaInit(event: CustomEvent<EmblaCarouselType>) {
		const node = event.currentTarget;
		if (!node) return;

		try {
			assertIsHTMLDivElement(node);

			emblaApi = event.detail;

			const prev = node.querySelector('.embla__prev');
			const next = node.querySelector('.embla__next');

			if (prev && emblaApi) prev.addEventListener('click', () => emblaApi.scrollPrev(), false);

			if (next && emblaApi) next.addEventListener('click', () => emblaApi.scrollNext(), false);
		} catch {}
	}

	onMount(function () {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				opened = false;
			}
		};

		window.addEventListener('keydown', handler);

		return function () {
			window.removeEventListener('keydown', handler);
		};
	});

	let { title, category, href, children, image, images }: PropTypes = $props();
</script>

<div class="project-card space-y-4">
	{#if image}
		<div class="image relative hidden md:block">
			{#if images && images.length > 0}
				<button onclick={OpenSlideshow} class="border-0 bg-transparent">
					{@render image()}
				</button>

				{#if opened}
					<div class="fixed inset-0 z-10 h-full w-full bg-white p-6">
						<div class="absolute right-2 top-2">
							<button onclick={CloseSlideshow} class="text-2xl">&times;</button>
						</div>
						<div class="embla" use:emblaCarouselSvelte onemblaInit={emblaInit}>
							<div class="embla__container">
								{#each images as slide, index}
									<div class="embla__slide">
										{#if typeof slide === 'string'}
											<img
												src={slide}
												alt={`slide ${index + 1} of ${images.length}`}
												class={imageSlideClassnames}
											/>
										{:else}
											<enhanced:img
												src={slide}
												alt={`slide ${index + 1} of ${images.length}`}
												class={imageSlideClassnames}
											/>
										{/if}
									</div>
								{/each}
							</div>

							{#if images.length > 1}
								<button class="embla__prev">Prev</button>
								<button class="embla__next">Next</button>
							{/if}
						</div>
					</div>
				{/if}
			{:else if href}
				<a {href} rel="noopen nofollow">
					{@render image()}
				</a>
			{:else}
				<span>
					{@render image()}
				</span>
			{/if}
		</div>
	{/if}

	<header class="flex items-center">
		{#if title}
			<div class="line-clamp-1 grow font-semibold" {title}>{title}</div>
		{/if}

		{#if category}
			<div class="ml-4 select-none border-l border-gray-300 pl-4 text-xs text-gray-700">
				{category}
			</div>
		{/if}
	</header>

	{#if children}
		<div class="text-sm">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.embla {
		overflow: hidden;
		height: 100%;
		width: 100%;
	}

	.embla__container {
		display: flex;
		height: 100%;
		width: 100%;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		height: 100%;
		width: 100%;
	}

	.embla__prev,
	.embla__next {
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 10;
		cursor: pointer;
	}

	.embla__next {
		left: auto;
		right: 0;
	}
</style>
