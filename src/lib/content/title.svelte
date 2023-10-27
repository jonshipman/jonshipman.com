<script>
	import { onMount } from 'svelte';

	const options = [
		'Webmaster',
		'DevOps',
		'Frontend Developer',
		'Backend Developer',
		'Fullstack',
		'UX Specialist',
		'Software Engineer',
		'Designer'
	];

	let choice = 0;
	let text = options[choice];

	onMount(() => {
		const loop = setInterval(() => {
			choice++;
			if (!options[choice]) choice = 0;

			text = options[choice];
		}, 1000);

		return () => {
			clearInterval(loop);
		};
	});
</script>

<h2 class="text-l font-pixel">
	<span class="inline-block -translate-y-1">✅</span>
	{text}
</h2>
