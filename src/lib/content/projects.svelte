<script lang="ts">
	import { Projects } from '$lib/projects';
	import ProjectCard from './project-card.svelte';
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
	{#each Projects as project}
		<ProjectCard
			title={project.title}
			category={project.category}
			href={project.href}
			images={project.fullImages}
		>
			<p>{project.content}</p>
			{#snippet image()}
				<enhanced:img
					src={project.image}
					alt={project.title}
					class="aspect-video w-full rounded-lg object-cover object-top"
				/>
			{/snippet}
		</ProjectCard>
	{/each}
</div>
