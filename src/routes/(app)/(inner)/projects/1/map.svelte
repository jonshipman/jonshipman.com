<script lang="ts">
	import { page } from '$app/stores';
	import { USA } from '$lib/map';
	import Container from './container.svelte';
	import type { WpPosts } from '$lib/wp';
	import Heading from './heading.svelte';
	import repeat from './repeat.webp';

	$: locations = $page.data.locations as WpPosts<any>;
</script>

<div class="text-blue-500 bg-blue-100 overflow-hidden relative flex flex-col">
	<USA class="relative z-20" />

	<div
		class="repeat absolute left-0 bottom-0 right-0 top-20 z-0 max-md:border-t-8 border-blue"
		style="background-image: url('{repeat}');"
	/>

	<div class="repeat-border bg-blue-500 absolute left-0 bottom-0 right-0 top-20 z-0 max-md:hidden" />

	<Container class="relative z-20 mt-8">
		<Heading>
			<span slot="heading">We have locations thoughout the Midwest</span>

			<span slot="text">
				In an continual effort to bring our quality of work and dedication to service to the rest of
				the USA, we have {locations.results.length} locations to better serve you.
			</span>
		</Heading>

		<div class="locations gap-4 flex flex-wrap justify-center lg:px-44">
			{#each locations.results as location (location.id)}
				<a
					class="bg-white text-blue-500 drop-shadow rounded-xl text-center text-lg h-16 flex items-center justify-center"
					href={location.link}
				>
					{@html location.title.rendered}
				</a>
			{/each}
		</div>
	</Container>

	<div class="relative z-20">
		<slot />
	</div>
</div>

<style lang="postcss">
	.locations > a {
		width: calc(50% - theme('spacing.4'));
	}

	@screen md {
		.locations > a {
			width: calc(33.33% - theme('spacing.4'));
		}

		.repeat-border {
			clip-path: polygon(
				50% theme('spacing.40'),
				100% 19rem,
				100% 21rem,
				50% theme('spacing.48'),
				0 21rem,
				0% 19rem
			);
		}

		.repeat {
			clip-path: polygon(
				50% theme('spacing.44'),
				100% theme('spacing.80'),
				100% 100%,
				0 100%,
				0 theme('spacing.80')
			);
		}
	}
</style>
