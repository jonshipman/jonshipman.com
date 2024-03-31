<script lang="ts">
	import Container from '$1/container.svelte';
	import { Button } from '$1/form';
	import { PostImage } from '$1/graphics';
	import Heading from '$1/heading.svelte';
	import { page } from '$app/stores';
	import { InView } from '$lib/effects';
	import type { WpPost } from '$lib/wp';
	import { onMount } from 'svelte';
	import Award from './award.svelte';

	type CustomPost = WpPost & { out?: CustomPost };

	let disable = true;
	let mobile = false;
	let swapinterval: ReturnType<typeof setInterval>;

	let awards: CustomPost[];
	$: awards = $page.data.awards.results;

	function filterResults(a: CustomPost[], s: number) {
		const awardItems: CustomPost[] = [...a]
			.filter((award) => {
				const termMeta = award._embedded['wp:term'];
				for (const terms of termMeta) {
					for (const term of terms) {
						if (term.slug === 'home') return true;
					}
				}

				return false;
			})
			.map(({ out, ...aa }) => aa);

		if (s > -1) {
			const limit = mobile ? 1 : 7;

			const destination = Math.floor(Math.random() * (awardItems.length - limit)) + limit;
			const item = awardItems[destination];
			awardItems[destination] = awardItems[s];
			awardItems[s] = item;

			awardItems[s].out = awardItems[destination];
		}

		return awardItems;
	}

	onMount(() => {
		swapinterval = setInterval(() => {
			if (!disable && awards) {
				const limit = mobile ? 1 : 7;
				awards = filterResults(awards, Math.floor(Math.random() * limit));
			}
		}, 2000);

		return () => {
			clearInterval(swapinterval);
		};
	});
</script>

<div class="text-blue-500 py-16 z-10 relative">
	<InView bind:notmounted={disable} always />
	<InView
		class="hidden md:block absolute left-0 top-0 bottom-0"
		bind:notmounted={mobile}
		threshold={1}
		always
	/>
	<Container>
		<Heading>
			<span slot="heading">
				Awards &amp; Certifications <br class="hidden md:block" />
				You Can Count On
			</span>
		</Heading>

		<div class="grid grid-cols-1 md:grid-cols-6 items-center justify-center my-24 gap-4">
			{#each awards as award, index}
				{#if index === 0}
					<a href={award.link} class="col-span-3 row-span-2">
						<Award {award} size="large" class="h-80 animate-in" />
					</a>
				{:else if index < (mobile ? 1 : 7)}
					<a href={award.link}>
						<Award {award} size="medium" class="aspect-4/3 hidden md:block animate-in" />
					</a>
				{:else if !disable}
					<PostImage post={award} size="medium" class="h-1 w-1 opacity-0 absolute" />
					<PostImage post={award} size="large" class="h-1 w-1 opacity-0 absolute" />
				{/if}
			{/each}
		</div>

		<div class="flex justify-center">
			<Button shadow tall alt>See All Of Our Awards &amp; Certifications</Button>
		</div>
	</Container>
</div>
