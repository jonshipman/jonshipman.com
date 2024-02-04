<script lang="ts">
	import { fade } from 'svelte/transition';
	import Scroll, { type ScrollEvent } from './scroll.svelte';

	let visible = false;

	function scroll(event: ScrollEvent) {
		visible = event.detail.height > event.detail.top;
	}
</script>

<Scroll on:scroll={scroll} debounce={100} />

{#if visible}
	<div in:fade>
		<slot />
	</div>
{/if}
