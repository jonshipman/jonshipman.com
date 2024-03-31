<script lang="ts">
	import Hero from './hero.svelte';
	import Navigation from './navigation.svelte';
	import Topbar from './topbar.svelte';
</script>

<header class="bg-blue-500">
	<Topbar />
	<Navigation>
		<Hero />
	</Navigation>
</header>
