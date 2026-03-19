<script lang="ts">
	import linkedin from '$lib/assets/linkedin.png?enhanced';
	import github from '$lib/assets/github.png?enhanced';
	import behance from '$lib/assets/behance.png?enhanced';
	import artstation from '$lib/assets/artstation.png?enhanced';
	import bluesky from '$lib/assets/bluesky.png?enhanced';
	import SocialLink from './social-link.svelte';

	type PropTypes = {
		height?: string;
	};

	let { height = '4' }: PropTypes = $props();
</script>

<SocialLink href="https://bsky.app/profile/jazzyshaman.bsky.social" src={bluesky} {height} />

<SocialLink href="https://www.linkedin.com/in/jon-shipman-91ab44178/" src={linkedin} {height} />

<SocialLink href="https://github.com/jonshipman" src={github} {height} />

<SocialLink href="https://www.behance.net/jonshipman1" src={behance} {height} />

<SocialLink href="https://www.artstation.com/jonshipman" src={artstation} {height} />
