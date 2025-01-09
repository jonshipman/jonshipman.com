<script lang="ts">
	import { page } from '$app/state';
	import type { TailwindConfig } from '$lib/server/util';
	import type { Snippet } from 'svelte';

	const tailwind: TailwindConfig = page.data.tailwind;

	type PropTypes = {
		class?: string;
		title: string;
		color: keyof TailwindConfig['theme']['colors'];
		icon?: Snippet;
		children: Snippet;
	};

	let { class: className = '', color = 'green', title, icon, children }: PropTypes = $props();
</script>

<div
	class="wrapper select-none rounded-2xl p-8 {className}"
	style="--fill-color: {tailwind.theme.colors[color][800]}; background-color: {tailwind.theme
		.colors[color][100]}"
>
	<div class="flex items-start gap-4">
		{#if icon}
			{@render icon()}
		{/if}

		<div class="text" style="color: {tailwind.theme.colors[color][900]};">
			<div class="mb-4 text-xl font-semibold">{@html title}</div>

			<div class="text-sm opacity-50">
				{@render children()}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.text :global(p) {
		@apply leading-relaxed;
	}

	.wrapper :global(svg) {
		@apply w-60;
	}

	.wrapper :global(svg) {
		fill: var(--fill-color);
	}
</style>
