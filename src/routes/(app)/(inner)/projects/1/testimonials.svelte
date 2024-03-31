<script lang="ts">
	import { InView } from '$lib/effects';
	import { listener } from '$lib/util';
	import { Arrow } from '$1/graphics';
	import Container from './container.svelte';
	import Heading from './heading.svelte';

	let nextAction: (() => void) | null = null;
	let prevAction: (() => void) | null = null;

	function callback(detail: { next: () => void; prev: () => void }) {
		nextAction = detail.next;
		prevAction = detail.prev;
	}

	function next() {
		if (nextAction) nextAction();
	}

	function prev() {
		if (prevAction) prevAction();
	}
</script>

<div class="community text-blue-500 bg-gray-100 py-16">
	<Container>
		<Heading>
			<span slot="heading" class="flex items-center">
				<span>
					<button
						class="aspect-square flex justify-center items-center bg-white rounded-full p-4"
						aria-label="Previous Testimonial"
						on:click={prev}
					>
						<Arrow class="w-8 h-8" />
					</button>
				</span>
				<span class="block grow">What Our Clients Say</span>
				<span>
					<button
						class="aspect-square flex justify-center items-center bg-blue-500 rounded-full p-4"
						aria-label="Next Testimonial"
						on:click={next}
					>
						<Arrow class="w-8 h-8 transform -scale-x-100 text-white" />
					</button>
				</span>
			</span>
		</Heading>

		<div use:listener={{ event: 'embla', callback }}>
			<InView async={() => import('./testimonials-async.svelte')} class="mt-16" threshold={0} />
		</div>
	</Container>
</div>

<style lang="postcss">
	.community {
		clip-path: none;
	}

	@screen md {
		.community {
			clip-path: polygon(50% 0, 100% theme('spacing.36'), 100% 100%, 0 100%, 0 theme('spacing.36'));
			@apply pt-32 -mt-24;
		}
	}
</style>
