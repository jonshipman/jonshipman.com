<script lang="ts">
	import './layout.css';
	import bg from '$lib/assets/bg.png';
	import js from '$lib/assets/js.png';
	import logo from '$lib/assets/jonshipman.png';
	import Social from '$lib/blocks/social.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="favicon.ico" /></svelte:head>

<div class="site-container" style="--bg-url: url('{bg}')">
	<div class=" relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 p-8">
		<header class="flex flex-col items-center justify-center gap-8 md:flex-row">
			<div>
				<img src={logo} alt="logo" class="block h-32 max-w-none object-contain select-none" />
			</div>

			<div class="flex gap-8">
				<Social />
			</div>
		</header>

		<main class="grow">
			{@render children()}
		</main>

		<footer class="flex flex-col items-center justify-center gap-8">
			<div>
				<img src={js} alt="js" class="block h-8 max-w-none object-contain select-none" />
			</div>

			<div
				class="flex w-full max-w-7xl flex-col items-center justify-center gap-8 text-sm text-gray-500 md:flex-row"
			>
				<div class="grow">
					<div>Jon Shipman, LLC</div>
					<div><a href="tel:+19137353463" class="underline">(913) 735-3463</a></div>
					<div><a href="mailto:jon@jonshipman.com" class="underline">jon@jonshipman.com</a></div>
				</div>
				<div class="flex flex-col items-end gap-4">
					<div class="flex gap-8 md:gap-4">
						<Social height="2" />
					</div>

					<div class="select-none">100% Certified Human</div>
				</div>
			</div>
		</footer>
	</div>
</div>

<style lang="postcss">
	.site-container {
		background-image: var(--bg-url);
	}
</style>
