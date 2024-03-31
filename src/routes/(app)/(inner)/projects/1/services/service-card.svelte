<script lang="ts">
	import { Button } from '$1/form';
	import { crossfade, slide } from 'svelte/transition';

	export let title: string;
	export let bg = '';

	let hover = false;
	const key = '1';

	$: style = bg ? `--bg: url('${bg}');` : '';

	const [send, receive] = crossfade({
		duration: 400
	});
</script>

<div
	role="banner"
	class="relative md:h-144"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	<div
		class="card h-full w-full rounded-2xl drop-shadow-2xl text-white md:absolute transition-all group"
		{style}
		class:not-hovered={!hover}
		class:hovered={hover}
	>
		<div
			class="md:absolute p-8 bottom-0 w-full flex flex-col gap-8 md:gap-4 group-hover:h-full justify-between group-hover:pb-16 group-hover:pt-16"
		>
			<slot name="icon" />

			<div class="text-5xl">{@html title}</div>

			{#if $$slots.default && hover}
				<div class="text-xl" transition:slide>
					<slot />
				</div>
			{/if}

			<div class="h-14 relative">
				{#if hover}
					<div in:send={{ key }} out:receive={{ key }}>
						<div class="absolute bottom-0">
							<Button tall wide alt>Learn More</Button>
						</div>
					</div>
				{:else}
					<div in:send={{ key }} out:receive={{ key }}>
						<div class="absolute bottom-0">
							<Button tall transparent class="flex items-center gap-4 -ml-4">
								<span>Read More</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M3.75 12H20.25"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.5 5.25L20.25 12L13.5 18.75"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.not-hovered {
		background: linear-gradient(0deg, theme('colors.blue.DEFAULT') -20%, transparent 60%),
			var(--bg, 'transparent');
		@apply bottom-0;
	}

	.hovered {
		background: var(--bg, 'transparent');
		@apply bottom-16 bg-blend-soft-light;
	}

	.card {
		@apply bg-blue-500 bg-center bg-cover;
	}
</style>
