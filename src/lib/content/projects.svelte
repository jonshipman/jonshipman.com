<script lang="ts">
	import { Projects } from '$lib/projects';
	import ProjectCard from './project-card.svelte';

	let { isFeatured }: { isFeatured?: boolean } = $props();
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
	{#each Projects as project}
		{#if (isFeatured && project.isFeatured) || !isFeatured}
			<ProjectCard title={project.title} category={project.category} href={project.href}>
				<p>{project.content}</p>
				{#snippet image()}
					<img src={project.image} alt={project.title} />
				{/snippet}
			</ProjectCard>
		{/if}
	{/each}
</div>
