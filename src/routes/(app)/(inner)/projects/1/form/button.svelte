<script lang="ts">
	import type { ButtonProps } from './button.svelte.d';

	export let href = '';
	export let tabindex = 1000;
	export let inverted = false;
	export let tall = false;
	export let outline = false;
	export let wide = false;
	export let alt = false;
	export let shadow = false;
	export let transparent = false;
	export let name = '';
	let className = '';

	const props: ButtonProps = {
		class:
			className +
			' cursor-pointer select-none leading-none inline-flex justify-center gap-3 rounded-lg items-center border-2'
	};

	if (name) props['aria-label'] = name;

	if (inverted) {
		props.class += ' border-white bg-white text-blue';
	} else if (outline) {
		props.class += ' border-white bg-transparent';
	} else if (alt) {
		props.class += ' border-orange bg-orange-500 text-white';
	} else if (transparent) {
		props.class += ' border-transparent text-white';
	} else {
		props.class += ' border-blue bg-blue-500 text-white';
	}

	if (shadow) {
		props.class += ' drop-shadow';
	}

	if (tall) {
		props.class += ' py-4';
	} else {
		props.class += ' py-2';
	}

	if (wide) {
		props.class += ' px-20';
	} else {
		props.class += ' px-4';
	}

	if (tabindex < 999) props.tabindex = tabindex;

	export { className as class };
</script>

{#if href}
	<a {href} {...props} on:click>
		<slot />
	</a>
{:else}
	<button type="submit" {...props} on:click>
		<slot />
	</button>
{/if}
