<script lang="ts">
	import { Container } from '$lib';
	import { Specialities } from '$lib/content';
	import ProjectCard from '$lib/content/project-card.svelte';
	import { Button } from '$lib/form';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import sveltekit from './sveltekit.webp';
	import remix from './remix.webp';
	import tipcalc from './tipcalc.webp';

	const experience = new Date().getFullYear() - 2007;

	let text = '&nbsp;';
	let mounted = false;

	function lookupInStorage(node: HTMLDivElement) {
		const storage = window.localStorage.getItem('visited');
		text = storage ? '👋 Welcome Back' : 'Welcome';
		window.localStorage.setItem('visited', '1');
	}

	onMount(() => {
		mounted = true;
	});
</script>

<div class="px-8 max-w-screen-7xl mx-auto">
	<div class="welcome -mx-8 lg:mx-0 lg:rounded-2xl px-8 py-32 md:py-60">
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

	<Container class="py-16 md:py-32">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-32">
			<div class="relative">
				<div class="md:sticky top-0 md:-mt-8">
					<div class="pt-8 text-4xl font-semibold">Expertise &amp; Specialties</div>

					<p class="my-8 leading-realxed">
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
		<header class="flex items-center mb-8">
			<div class="pt-8 text-4xl font-semibold">Web Wonders</div>
			<Button class="ml-auto" href="/projects">Projects</Button>
		</header>

		<div class="grid grid-cols-1 gap-8">
			<ProjectCard
				title="SvelteKit + Pocketbase"
				category="boilerplate"
				href="https://github.com/jonshipman/sveltekit-pb-boilerplate"
			>
				<p>
					A reusable template for a SvelteKit + Pocketbase website. Includes SSR and CSR
					authentication and security. Provides screens for login, registration, and forgot
					password. Easy to use cross-platform setup script.
				</p>

				<img src={sveltekit} slot="image" alt="SvelteKit + Pocketbase" />
			</ProjectCard>

			<ProjectCard
				title="Tip Calculation Calculator"
				category="code"
				color="purple"
				href="https://github.com/jonshipman/tip-calculator"
			>
				<p>POC Android application written with Sveltekit, TailwindCSS, and Capacitor.</p>

				<img src={tipcalc} slot="image" alt="Tip Calculation Calculator" />
			</ProjectCard>

			<ProjectCard
				title="Remix + Pocketbase"
				category="demo"
				color="blue"
				href="https://github.com/jonshipman/remix-run-examples/commit/73dba077bb3dfbabf70b41ee7908972eee99f22e"
			>
				<p>
					React based implementation of Pocketbase's authentication stack. Includes login, logout,
					and realtime data demoed. SSR + CSR compatible using HTTP cookie sharing.
				</p>

				<img src={remix} slot="image" alt="Remix + Pocketbase" />
			</ProjectCard>
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
