<script lang="ts">
	import { Form } from '$lib/form';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-32 pt-16 md:pt-32">
	<div class="border-r border-green pr-8">
		{#if mounted}
			<div class="text-4xl font-semibold" in:fade>Hey. What's Up?</div>
		{/if}
	</div>
	<Form />
</div>

<svelte:head>
	<title>Contact | JonShipman.com</title>
	<meta name="description" content="I can write forms too." />
</svelte:head>
