<script lang="ts">
	import ProjectCard from './project-card.svelte';
	import remix from './remix.webp';
	import sveltekit from './sveltekit.webp';
	import tipcalc from './tipcalc.webp';
</script>

<div class="grid grid-cols-1 gap-8">
	<ProjectCard
		title="SvelteKit + Pocketbase"
		category="boilerplate"
		href="https://github.com/jonshipman/sveltekit-pb-boilerplate"
	>
		<p>
			A reusable template for a SvelteKit + Pocketbase website. Includes SSR and CSR authentication
			and security. Provides screens for login, registration, and forgot password. Easy to use
			cross-platform setup script.
		</p>

		<img src={sveltekit} slot="image" alt="SvelteKit + Pocketbase" />
	</ProjectCard>

	<ProjectCard
		title="Tip Calculation Calculator"
		category="code"
		color="purple"
		href="https://github.com/jonshipman/tip-calculator"
	>
		<p>POC Android application written with Sveltekit, TailwindCSS, and Capacitor.</p>

		<img src={tipcalc} slot="image" alt="Tip Calculation Calculator" />
	</ProjectCard>

	<ProjectCard
		title="Remix + Pocketbase"
		category="demo"
		color="blue"
		href="https://github.com/jonshipman/remix-run-examples/commit/73dba077bb3dfbabf70b41ee7908972eee99f22e"
	>
		<p>
			React based implementation of Pocketbase's authentication stack. Includes login, logout, and
			realtime data demoed. SSR + CSR compatible using HTTP cookie sharing.
		</p>

		<img src={remix} slot="image" alt="Remix + Pocketbase" />
	</ProjectCard>
</div>
