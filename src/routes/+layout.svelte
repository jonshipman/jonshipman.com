<script lang="ts">
	import './layout.css';

	const year = new Date().getFullYear();
</script>

<div class="wrapper p-5 print:p-0 flex h-screen print:h-auto justify-stretch print:text-xs">
	<div class="flex justify-stretch grow bg-green print:bg-white rounded-xl text-purple print:text-black overflow-x-auto print:overflow-visible shadow-md print:shadow-none">
		<div class="flex flex-col flex-1 grow px-10 pt-10 print:p-0">
			<div class="flex-1 grow">
				<slot />
			</div>
			<div class="print:hidden text-right mt-5 pb-10">&copy; {year}</div>
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
