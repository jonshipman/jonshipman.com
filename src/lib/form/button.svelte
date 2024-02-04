<script lang="ts">
	export let wide = false;
	export let href = '';
	export let weak = false;

	let className = 'contents';

	const classes = {
		default: 'select-none inline-block transition-all font-semibold leading-6 whitespace-nowrap',
		strong:
			'hover:-translate-y-1 hover:drop-shadow text-white rounded-lg bg-purple-800 px-6 py-4 hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
		weak: 'text-inherit',
		wide: 'flex w-full justify-center items-center'
	};

	const elementClasses = `${classes.default} ${weak ? classes.weak : classes.strong} ${wide ? classes.wide : ''}`;

	export { className as class };
</script>

<div class={className}>
	{#if href}
		<a {href} class={elementClasses}>
			<slot />
		</a>
	{:else}
		<button type="submit" on:click on:keypress class={elementClasses}>
			<slot />
		</button>
	{/if}
</div>
