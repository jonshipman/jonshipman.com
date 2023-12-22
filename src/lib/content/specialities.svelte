<script lang="ts">
	import Pill from '$lib/ui/pill.svelte';
	import { onMount } from 'svelte';

	let className = '';
	let mounted = false;

	const options = shuffle([
		'*nix administration',
		'BASH',
		'Cpanel',
		'CSS',
		'DevOps',
		'Docker',
		'Drupal',
		'eslint',
		'Github Actions',
		'Heroku',
		'JavaScript',
		'MongoDB',
		'MySQL',
		'NextJS',
		'Node.js',
		'PHP',
		'prettier',
		'python',
		'React',
		'rollup',
		'Svelte',
		'Symfony',
		'tachyons.io',
		'Tailwindcss',
		'vite',
		'Vue.js',
		'webpack',
		'WordPress',
		'Responsive Layouts',
		'Google BigQuery',
		'AWS',
		'Google Workspace',
		'pocketbase',
		'sqlite'
	]);

	export { className as class };

	onMount(() => {
		mounted = true;
	});

	function shuffle(array: string[]) {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}
</script>

{#if mounted}
	<div class={className}>
		<div class="flex gap-4 flex-wrap">
			{#each options as opt}
				<Pill>{opt}</Pill>
			{/each}
		</div>
	</div>
{/if}
