<script>
	import './layout.css';

	const year = new Date().getFullYear();
</script>

<div class="wrapper p-5 flex h-screen justify-stretch">
	<div class="flex justify-stretch grow bg-green rounded-xl text-purple overflow-x-auto shadow-md">
		<div class="flex flex-col flex-1 grow px-10 pt-10">
			<div class="flex-1 grow">
				<slot />
			</div>
			<div class="text-right mt-5 pb-10">&copy; {year}</div>
		</div>
	</div>
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
