<script lang="ts">
	import Github from '$lib/icons/github.svelte';
	import LinkedIn from '$lib/icons/linkedin.svelte';
	import Resume from '$lib/icons/resume.svelte';
</script>

<div class="ml-auto grid grid-cols-8 md:grid-cols-3 gap-4 items-center">
	<a
		href="https://www.linkedin.com/in/jon-shipman-91ab44178/"
		target="_new"
		rel="nofollow"
		class="hover:text-olive"
	>
		<LinkedIn width="30" height="30" />
	</a>

	<a href="https://github.com/jonshipman" target="_new" rel="nofollow" class="hover:text-olive">
		<Github width="25" height="25" />
	</a>

	<a href="/resume" class="hover:text-olive" aria-label="Resume" title="Resume">
		<Resume width="30" height="30" />
	</a>
</div>
