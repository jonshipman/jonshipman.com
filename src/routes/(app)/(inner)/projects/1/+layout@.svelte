<script lang="ts">
	import { Footer } from '$1/footer';
	import { Header } from '$1/header';
	import './layout.css';
</script>

<div class="relative z-0 min-h-screen flex flex-col max-w-[160rem] w-full mx-auto">
	<Header />

	<main class="grow">
		<slot />
	</main>

	<Footer />
</div>
