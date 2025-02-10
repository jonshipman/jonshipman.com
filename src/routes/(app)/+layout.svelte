<script lang="ts">
	import { Container } from '$lib';
	import { Links } from '$lib/content';
	import { Button } from '$lib/form';

	const year = new Date().getFullYear();

	function ChangeMedia(this: HTMLLinkElement) {
		this.media = 'all';
	}
</script>

<header class="select-none py-6 pt-0 md:pt-6 print:hidden">
	<Container>
		<div class="mb-8 block text-center text-3xl font-bold md:hidden">
			<a class="-mx-8 block bg-indigo-50 py-4 text-indigo-900" href="tel:19137353463">
				(913) 735-3463
			</a>
		</div>
		<Links class="my-8 flex justify-center md:hidden" />

		<div class="flex items-center gap-4">
			<div class="text-3xl font-bold"><a href="/">Jon Shipman</a></div>
			<div class="grow"></div>
			<Links class="hidden md:block" />
			<Button href="/contact">Contact Me</Button>
		</div>
	</Container>
</header>

<main class="grow">
	<slot />
</main>

<footer class="select-none py-2 text-center text-xs text-slate-600 print:hidden">
	&copy; {year} Jon Shipman /
	<a href="/resume">Resume</a>
	/
	<a href="mailto:jon@jonshipman.com">Email</a>
	/
	<a href="tel:+19137353463">Call</a>
</footer>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" media="print" onload={ChangeMedia} />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
		media="print"
		onload={ChangeMedia}
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@100..900&display=swap"
		rel="stylesheet"
		media="print"
		onload={ChangeMedia}
	/>
</svelte:head>
