<script lang="ts">
	import { Container } from '$lib';
	import { Links } from '$lib/content';
	import { Button } from '$lib/form';

	const year = new Date().getFullYear();
</script>

<div class="flex flex-col min-h-screen w-full">
	<header class="pt-0 md:pt-6 py-6 select-none print:hidden">
		<Container>
			<div class="mb-8 block md:hidden font-bold text-center text-3xl">
				<a class="text-indigo-900 bg-indigo-50 -mx-8 block py-4" href="tel:19137353463">
					(913) 735-3463
				</a>
			</div>
			<Links class="md:hidden my-8 flex justify-center" />

			<div class="flex items-center gap-4">
				<div class="font-bold text-3xl"><a href="/">Jon Shipman</a></div>
				<div class="grow" />
				<Links class="hidden md:block" />
				<Button href="/contact">Contact Me</Button>
			</div>
		</Container>
	</header>

	<main class="grow">
		<slot />
	</main>

	<footer class="py-2 text-xs text-center select-none text-slate-600 print:hidden">
		&copy; {year} Jon Shipman /
		<a href="/resume">Resume</a>
		/
		<a href="mailto:jon@jonshipman.com">Email</a>
		/
		<a href="tel:+19137353463">Call</a>
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
