<script lang="ts">
	import { resume } from '$lib/resume';
	import type { MouseEventHandler } from 'svelte/elements';
	import downDark from './down-dark.gif';
	import downLight from './down-light.gif';
	import Container from '$lib/container.svelte';
	import dashboardImage from './dashboards.webp?enhanced&w=360';
	import cmsImage from './cms.webp?enhanced&w=360';
	import HomeSection from './home-section.svelte';

	const scrollDown: MouseEventHandler<HTMLButtonElement> = function () {
		window.scrollBy(0, window.innerHeight);
	};
</script>

<div class="flex w-full flex-col gap-8">
	<div class="flex min-h-screen flex-col items-center justify-center bg-gray-300 dark:bg-gray-700">
		<div class="flex flex-auto flex-col items-center justify-center gap-5 text-xl select-none">
			<div><a href="/resume">Resume</a></div>
			<div>
				<a href="https://github.com/jonshipman" target="_new" rel="nofollow noopen">GitHub</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/jon-shipman-91ab44178/"
					target="_new"
					rel="nofollow noopen"
				>
					LinkedIn
				</a>
			</div>
			<div>
				<a
					href="https://bsky.app/profile/jonshipman.bsky.social"
					target="_new"
					rel="nofollow noopen"
				>
					BlueSky
				</a>
			</div>
			<div>
				<a href="https://www.artstation.com/jonshipman" target="_new" rel="nofollow noopen">
					ArtStation
				</a>
			</div>
			<div>
				<a href="tel:+19137353463">+1 913-735-3463</a>
			</div>
			<div>
				<a href="/contact">jon🌀jonshipman.com</a>
			</div>
		</div>
		<button onclick={scrollDown} class="cursor-pointer">
			<img class="block h-24 w-24 object-cover dark:hidden" src={downLight} alt="down (light)" />
			<img class="hidden h-24 w-24 object-cover dark:block" src={downDark} alt="down (dark)" />
		</button>
	</div>

	<Container class="text-center text-gray-500">
		<p>Available immediately for professional consultations, development, and design.</p>
		<div><a href="tel:+19137353463" class="underline">Call Today</a></div>
	</Container>

	<Container>
		<div class="flex flex-col gap-12 md:flex-row">
			<HomeSection src={dashboardImage} title="Bespoke Admin Panels">
				I build custom admin panels designed for seamless data management and intuitive control.
				Each solution is tailored to client workflows, integrating smoothly with systems like
				WordPress, React, Angular, Svelte, or Laravel for a fast, scalable, and user-friendly
				experience.
			</HomeSection>

			<HomeSection src={cmsImage} title="Expert CMS Experiences">
				I create tailored WordPress and Drupal solutions-from custom themes and plugins to advanced
				integrations within existing site builders. My work enhances performance, flexibility, and
				design consistency, delivering websites that are fast, secure, and easy to manage.
			</HomeSection>
		</div>
	</Container>
</div>

<svelte:head>
	<title>{resume.shortdesc}</title>
	<meta name="description" content={resume.summary} />
</svelte:head>
