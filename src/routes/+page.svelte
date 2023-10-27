<script>
	import Links from '$lib/content/links.svelte';
	import Specialities from '$lib/content/specialities.svelte';
	import Title from '$lib/content/title.svelte';
	import Rule from '$lib/ui/rule.svelte';

	const experience = new Date().getFullYear() - 2007;
</script>

<div class="flex items-center">
	<div>
		<h1 class="text-3xl font-bold">Jon Shipman</h1>
		<Title />
	</div>

	<div class="ml-auto hidden md:block">
		<Links />
	</div>
</div>

<Rule class="my-5 max-w-xs" />

<div class="block md:hidden">
	<Links />
</div>

<div class="py-20 text-2">I'm Jon and I make websites.</div>

<h3 class="text-xl font-bold">Specialities</h3>

<Specialities class="mt-6 max-w-3xl" />

<svelte:head>
	<title>JonShipman.com</title>
	<meta name="description" content="Web developer with {experience} years of experience." />
</svelte:head>
