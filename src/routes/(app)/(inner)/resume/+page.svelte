<script lang="ts">
	import { resume } from '$lib/resume';
</script>

<p class="print:mt-12 print:text-right">
	<a
		class="text-sky-600 underline dark:text-slate-400 print:text-black print:no-underline"
		href="mailto:jon@jonshipman.com"
	>
		jon@jonshipman.com
	</a>
	<br />
	+1 (913) 735-3463
	<br />
	<a
		class="text-sky-600 underline dark:text-slate-400 print:text-black print:no-underline"
		href="https://jonshipman.com"
		rel="nofollow"
	>
		https://jonshipman.com
	</a>
	<br />
	Remote / Denver, CO
</p>

<h1 class="my-4 hidden text-3xl font-bold print:block">Jon Shipman</h1>

<div class="no-tailwind">
	<p>
		{resume.summary}
	</p>
	<h2>Skills</h2>
	<p>
		<strong>Frontend</strong>
		: {resume.skills.frontend.join(', ')}
	</p>
	<p>
		<strong>Backend / Platforms</strong>
		: {resume.skills.backend.join(', ')}
	</p>
	<p>
		<strong>DevOps / Tools</strong>
		: {resume.skills.tools.join(', ')}
	</p>
	<p>
		<strong>Design / Creative</strong>
		: {resume.skills.design.join(', ')}
	</p>
	<h2>Working Experience</h2>

	{#each resume.work as work}
		<h4>{work.company} ({work.title}, {work.start} - {work.end})</h4>
		<ul>
			{#each work.desc as exp}
				<li>{exp}</li>
			{/each}
		</ul>
	{/each}

	<h3>{resume.education}</h3>
</div>

<svelte:head>
	<title>Resume | {resume.shortdesc}</title>
	<meta name="description" content={resume.summary} />
</svelte:head>
