<script lang="ts">
	import type { Snippet } from 'svelte';

	type PropTypes = {
		class?: string;
		title: string;
		icon?: Snippet;
		children: Snippet;
	};

	let { class: className = '', title, icon, children }: PropTypes = $props();
</script>

<div
	class="tech-card group rounded-2xl bg-gray-100 transition-colors hover:bg-purple-900 hover:text-white {className}"
>
	<div>
		{#if icon}
			<div class="-mt-4 px-8">
				<div
					class="inline-block rounded bg-purple-500 p-3 text-white transition-colors group-hover:bg-purple-100 group-hover:text-purple-900"
				>
					{@render icon()}
				</div>
			</div>
		{/if}

		<div class="space-y-4 px-8 pb-8 pt-4">
			<div class="text-xl font-semibold">{@html title}</div>

			<div class="text-xs">
				{@render children()}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(.tech-card svg) {
		@apply h-8 w-8;
	}
</style>
