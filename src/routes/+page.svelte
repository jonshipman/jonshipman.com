<script lang="ts">
	import { Button } from '$lib/form';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const experience = new Date().getFullYear() - 2007;

	let text = '&nbsp;';
	let mounted = false;

	function lookupInStorage(node: HTMLDivElement) {
		const storage = window.localStorage.getItem('visited');
		text = storage ? 'Welcome Back' : 'Welcome';
		window.localStorage.setItem('visited', '1');
	}

	onMount(() => {
		mounted = true;
	});
</script>

<div class="welcome rounded-2xl px-8 py-32 md:py-64">
	<div class="welcome-text bg-clip-text text-transparent text-center">
		<div class="text-7xl font-extrabold" use:lookupInStorage>
			{@html text}
		</div>

		<p class="my-8 text-xl">
			I'm a fullstack web developer working out of Lenexa, KS. <br class="hidden md:block" />
			I make stuff, check it out.
		</p>
	</div>

	{#if mounted}
		<div transition:fade={{ delay: 400 }} class="text-center">
			<Button class="text-lg" href="/projects">Projects 👷</Button>
		</div>
	{/if}
</div>

<svelte:head>
	<title>JonShipman.com</title>
	<meta name="description" content="Web developer with {experience} years of experience." />
</svelte:head>

<style lang="postcss">
	.welcome {
		background: linear-gradient(-45deg, theme('colors.green.500'), theme('colors.purple.500'));
		background-size: 400% 400%;
		animation: gradient 30s ease-in-out infinite;
	}

	.welcome-text {
		background-image: linear-gradient(
			-45deg,
			theme('colors.green.800'),
			theme('colors.purple.800')
		);
		background-size: 400% 400%;
		animation: gradient 30s ease-in-out infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		25% {
			background-position: 100% 50%;
		}
		50% {
			background-position: 0% 50%;
		}
		75% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 49.99%;
		}
	}
</style>
