<script lang="ts">
	import { page } from '$app/stores';
	import { Container } from '$lib';
	import { Links } from '$lib/content';
	import { Button } from '$lib/form';
	import './layout.css';

	const year = new Date().getFullYear();
	const linkClass = 'rounded inline-block rounded-lg py-2 px-4 transition-colors';

	$: activePage = $page.url.pathname;
</script>

<div class="flex flex-col min-h-screen w-full">
	<header class="py-8 select-none">
		<Container>
			<div class="flex items-center gap-4">
				<div class="font-bold text-3xl"><a href="/">Jon Shipman</a></div>
				<div class="grow flex justify-center font-semibold">
					<a href="/projects" class={linkClass} class:active={activePage === '/projects'}>
						Projects
					</a>
				</div>
				<Links />
				<Button href="/contact">Contact Me</Button>
			</div>
		</Container>
	</header>

	<main class="grow">
		<Container>
			<slot />
		</Container>
	</main>

	<footer class="py-2 text-xs text-center select-none">
		&copy; {year} Jon Shipman
	</footer>
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style lang="postcss">
	.active {
		@apply bg-gray-500 bg-opacity-10;
	}
</style>
