<script lang="ts">
	import { Container } from '$lib';
	import { Projects, Specialities } from '$lib/content';
	import { Button } from '$lib/form';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import hosting from './hosting.webp';

	const experience = new Date().getFullYear() - 2007;

	let text = $state('&nbsp;');
	let mounted = $state(false);

	function lookupInStorage(node: HTMLDivElement) {
		const storage = window.localStorage.getItem('visited');
		text = storage ? '👋 Welcome Back' : 'Welcome';
		window.localStorage.setItem('visited', '1');
	}

	onMount(() => {
		mounted = true;
	});
</script>

<div class="max-w-screen-7xl mx-auto px-8">
	<div class="welcome -mx-8 px-8 py-32 md:py-60 lg:mx-0 lg:rounded-2xl">
		<div class="welcome-text bg-clip-text text-center text-transparent">
			<div class="text-5xl font-extrabold md:text-7xl" use:lookupInStorage>
				{@html text}
			</div>

			<p class="my-8 text-xl">
				I'm a fullstack web developer working out of Denver, CO. <br class="hidden md:block" />
				I make stuff, check it out.
			</p>
		</div>

		{#if mounted}
			<div transition:fade={{ delay: 400 }} class="text-center">
				<Button class="text-lg" href="/projects">Projects 👷</Button>
			</div>
		{/if}
	</div>

	<Container class="py-16 md:py-32">
		<div class="grid grid-cols-1 gap-32 md:grid-cols-2">
			<div class="relative">
				<div class="top-0 md:sticky md:-mt-8">
					<div class="pt-8 text-4xl font-semibold">Expertise &amp; Specialties</div>

					<p class="leading-realxed my-8">
						As a seasoned web developer, I bring a wealth of experience and a passion for crafting
						robust, user-friendly digital experiences. My expertise lies in translating innovative
						ideas into functional, visually appealing websites. From front-end development using
						cutting-edge technologies to back-end solutions ensuring seamless functionality, I am
						dedicated to delivering high-quality, performance-driven websites.
					</p>

					<Button href="/resume">More Details</Button>
				</div>
			</div>

			<div>
				<Specialities />
			</div>
		</div>
	</Container>

	<Container class="py-16 md:py-32">
		<header class="mb-8 flex items-center">
			<div class="pt-8 text-4xl font-semibold">Web Wonders</div>
			<Button class="ml-auto" href="/projects">Projects</Button>
		</header>

		<Projects isFeatured />
	</Container>

	<Container class="py-16 md:py-32">
		<div class="grid grid-cols-1 items-center gap-32 md:grid-cols-2">
			<div class="relative">
				<div class="top-0 md:sticky md:-mt-8">
					<div class="pt-8 text-4xl font-semibold">Hosting</div>

					<p class="leading-realxed my-8">
						Looking for reliable and affordable website hosting? I offer a range of hosting
						solutions to fit your needs. Contact me today for a free quote and to discuss your
						hosting requirements.
					</p>

					<Button href="/contact">Contact</Button>
				</div>
			</div>

			<div>
				<img src={hosting} class="block rounded-xl" alt="Hosting" width="512" height="512" />
			</div>
		</div>
	</Container>
</div>

<svelte:head>
	<title>JonShipman.com</title>
	<meta name="description" content="Web developer with {experience} years of experience." />
</svelte:head>

<style lang="postcss">
	.welcome {
		background: linear-gradient(
			-45deg,
			theme('colors.yellow.500'),
			theme('colors.green.500'),
			theme('colors.blue.500'),
			theme('colors.purple.500'),
			theme('colors.red.500')
		);
	}

	.welcome-text {
		background-image: linear-gradient(
			-45deg,
			theme('colors.yellow.800'),
			theme('colors.green.800'),
			theme('colors.blue.800'),
			theme('colors.purple.800'),
			theme('colors.red.800')
		);
	}

	.welcome,
	.welcome-text {
		background-size: 400% 400%;
		animation: gradient 15s ease-in-out infinite;
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
