<script lang="ts">
	import { slide } from 'svelte/transition';

	interface Child {
		href: string;
		text: string;
		children?: Child[];
	}

	export let href: string;
	export let text: string;
	export let children: Child[] = [];
	let className = '';
	let hovering = false;

	function hoverOn() {
		hovering = true;
	}

	function hoverOff() {
		hovering = false;
	}

	export { className as class };
</script>

<li class={className} on:mouseenter={hoverOn} on:mouseleave={hoverOff}>
	<div><a {href} class="block p-2 md:p-0">{@html text}</a></div>

	{#if children?.length && hovering}
		<ul class="bg-white rounded-lg text-blue-500 absolute drop-shadow" transition:slide>
			{#each children as { children: c, text, href }}
				<svelte:self class="py-1 px-3" children={c} {text} {href} />
			{/each}
		</ul>
	{/if}

	{#if children?.length}
		<ul class="block md:hidden">
			{#each children as { children: c, text, href }}
				<svelte:self class="py-1 px-3" children={c} {text} {href} />
			{/each}
		</ul>
	{/if}
</li>
