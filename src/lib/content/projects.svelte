<script lang="ts">
	import { Projects } from '$lib/projects';
	import ProjectCard from './project-card.svelte';
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
	{#each Projects as project}
		<ProjectCard title={project.title} category={project.category} href={project.href}>
			<p>{project.content}</p>
			{#snippet image()}
				<img
					src={project.image}
					alt={project.title}
					class="aspect-video rounded-lg object-cover object-top"
				/>
			{/snippet}
		</ProjectCard>
	{/each}
</div>
