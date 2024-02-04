<script lang="ts">
	import { tailwind } from '$lib/util';

	let className = '';
	export let color: keyof typeof tailwind.theme.colors = 'green';
	export let title: string;

	export { className as class };
</script>

<div
	class="wrapper rounded-2xl p-8 select-none {className}"
	style="--fill-color: {tailwind.theme.colors[color][800]}; background-color: {tailwind.theme
		.colors[color][100]}"
>
	<div class="flex items-start gap-4">
		<slot name="icon" />

		<div class="text" style="color: {tailwind.theme.colors[color][900]};">
			<div class="text-xl font-semibold mb-4">{@html title}</div>

			<div class="opacity-50 text-sm">
				<slot />
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
