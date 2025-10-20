<script lang="ts">
	import { page } from '$app/state';
	import contactLight from './contact-light.gif';
	import contactDark from './contact-dark.gif';

	let { children } = $props();

	function headerPosition(homeState: boolean | undefined) {
		return homeState ? 'absolute' : 'relative';
	}

	function pageName(pathname: string, check: string, className: string) {
		return pathname.includes(check) ? className : '';
	}

	function ChangeMedia(this: HTMLLinkElement) {
		this.media = 'all';
	}
</script>

<div class="relative flex min-h-screen flex-col gap-8 bg-white dark:bg-gray-900 dark:text-white">
	<header class="{headerPosition(page.data.isHome)} z-10 w-full print:hidden">
		<div class="flex w-full">
			<div class="w-full p-6 select-none">
				<a href="/" class="block font-display text-3xl">Jon Shipman</a>
			</div>
			<div class="-mt-3">
				<a href="/contact" class={pageName(page.url.pathname, 'contact', 'hidden')}>
					<img class="block h-24 w-24 object-contain dark:hidden" src={contactLight} alt="✉️" />
					<img class="hidden h-24 w-24 object-contain dark:block" src={contactDark} alt="✉️" />
				</a>
			</div>
		</div>
	</header>

	<main class="grow">
		{@render children()}
	</main>

	<footer class="py-2 text-center text-xs text-slate-600 dark:text-slate-400 select-none print:hidden">
		&copy; Jon Shipman /
		<a href="/resume">Resume</a>
		/
		<a href="/contact">Email</a>
		/
		<a href="tel:+19137353463">Call</a>
	</footer>
</div>

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
		href="https://fonts.googleapis.com/css2?family=Lobster&family=Inter:wght@100..900&display=swap"
		rel="stylesheet"
		media="print"
		onload={ChangeMedia}
	/>
</svelte:head>
