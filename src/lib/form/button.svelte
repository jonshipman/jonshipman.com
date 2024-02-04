<script lang="ts">
	export let wide = false;
	export let href = '';
	export let weak = false;
	export let rel = '';

	let className = 'contents';

	const classes = {
		default:
			'select-none inline-flex gap-2 items-center transition-all font-semibold leading-6 whitespace-nowrap',
		strong: 'strong hover:-translate-y-1 hover:drop-shadow text-white rounded-lg px-6 py-4',
		weak: 'text-inherit',
		wide: 'flex w-full justify-center items-center'
	};

	const elementClasses = `${classes.default} ${weak ? classes.weak : classes.strong} ${wide ? classes.wide : ''}`;

	export { className as class };
</script>

<div class={className}>
	{#if href}
		<a {href} class={elementClasses} {rel}>
			<slot />
		</a>
	{:else}
		<button type="submit" on:click on:keypress class={elementClasses}>
			<slot />
		</button>
	{/if}
</div>

<style lang="postcss">
	.strong {
		background-color: var(--color, theme('colors.purple.800'));
	}

	.strong:hover {
		background-color: var(--color-hover, theme('colors.purple.500'));
	}
</style>
