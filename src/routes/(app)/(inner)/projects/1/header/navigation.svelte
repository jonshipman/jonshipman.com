<script lang="ts">
	import { page } from '$app/stores';
	import type { WpPosts } from '$lib/wp';
	import { WhiteLogo } from '$1/brand';
	import Container from '$1/container.svelte';
	import Background from './background.svelte';
	import MenuButton from './menu-button.svelte';
	import NavItem from './nav-item.svelte';

	let open = false;

	function toggleOpen() {
		open = !open;
	}

	let locations: WpPosts<any> | undefined;
	$: locations = $page.data.locations;

	let services: WpPosts<any> | undefined;
	$: services = $page.data.services;
</script>

<nav class="relative bg-white">
	<Container class="relative z-20">
		<div class="items-center md:flex">
			<div class="flex items-center">
				<div class="grow">
					<WhiteLogo class="w-36 py-6" />
				</div>

				<div class="block md:hidden text-white">
					<MenuButton class="w-10 h-10" bind:open on:click={toggleOpen} />
				</div>
			</div>

			<ul
				class="md:ml-auto md:flex md:gap-11 text-blue-500 md:text-white bg-white md:bg-transparent rounded-xl drop-shadow md:drop-shadow-none"
				class:opened={open}
				class:not-opened={!open}
			>
				<NavItem text="About" href="/about/" />
				<NavItem text="Residential" href="/service/residential-maintenance-program/" />
				<NavItem text="Commercial" href="/service/commercial-maintenance-program/" />
				<NavItem
					text="Services"
					href="/services/"
					children={services?.results
						? services.results.map((l) => ({ href: l.link, text: l.title.rendered }))
						: []}
				/>
				<NavItem
					text="Locations"
					href="/locations/"
					children={locations?.results
						? locations.results.map((l) => ({ href: l.link, text: l.title.rendered }))
						: []}
				/>
				<NavItem text="Financing" href="/financing/" />
				<NavItem text="Get In Touch" href="/contact/" />
			</ul>
		</div>
	</Container>

	{#if $$slots.default}
		<div class="relative z-10">
			<slot />
		</div>
	{/if}

	<Background />
</nav>

<style lang="postcss">
	.opened {
		@apply block;
	}

	.not-opened {
		@apply hidden;
	}

	@screen md {
		.opened {
			@apply flex;
		}

		.not-opened {
			@apply flex;
		}
	}
</style>
