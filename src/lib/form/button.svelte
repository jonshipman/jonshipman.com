<script lang="ts">
	import type { Snippet } from 'svelte';

	type PropTypes = {
		wide?: boolean;
		href?: string;
		weak?: boolean;
		rel?: string;
		class?: string;
		children: Snippet;
		onclick?: () => void;
		onkeypress?: () => void;
	};

	let {
		wide = false,
		href = '',
		weak = false,
		rel = '',
		class: className = 'contents',
		children,
		onclick,
		onkeypress
	}: PropTypes = $props();

	const classes = {
		default:
			'select-none inline-flex gap-2 items-center transition-all font-semibold leading-6 whitespace-nowrap',
		strong: 'strong hover:-translate-y-1 hover:drop-shadow text-white rounded-lg px-6 py-4',
		weak: 'text-inherit',
		wide: 'flex w-full justify-center items-center'
	};

	const elementClasses = `${classes.default} ${weak ? classes.weak : classes.strong} ${wide ? classes.wide : ''}`;
</script>

<div class={className}>
	{#if href}
		<a {href} class={elementClasses} {rel}>
			{@render children()}
		</a>
	{:else}
		<button type="submit" {onclick} {onkeypress} class={elementClasses}>
			{@render children()}
		</button>
	{/if}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.strong {
		background-color: var(--color, var(--color-purple-800));
	}

	.strong:hover {
		background-color: var(--color-hover, var(--color-purple-500));
	}
</style>
