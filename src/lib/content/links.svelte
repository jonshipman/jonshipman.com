<script lang="ts">
	import { Github, LinkedIn, Resume } from '$lib/icons';

	let className = 'contents';

	export { className as class };
</script>

<div class={className}>
	<div class="flex justify-center md:justify-normal gap-8 md:gap-4 items-center text-purple-800">
		<a
			href="https://www.linkedin.com/in/jon-shipman-91ab44178/"
			target="_new"
			rel="nofollow noopen"
			class="hover:text-purple"
		>
			<LinkedIn width="30" height="30" />
		</a>

		<a href="https://github.com/jonshipman" target="_new" rel="nofollow" class="hover:text-purple">
			<Github width="25" height="25" />
		</a>

		<a href="/resume" class="hover:text-purple" aria-label="Resume" title="Resume">
			<Resume width="30" height="30" />
		</a>
	</div>
</div>
