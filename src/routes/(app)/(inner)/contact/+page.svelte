<script lang="ts">
	import { Form } from '$lib/form';
	import { resume } from '$lib/resume';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<div>
	<Form />
</div>

<svelte:head>
	<title>Contact | {resume.shortdesc}</title>
	<meta name="description" content="I can write forms too." />
</svelte:head>
