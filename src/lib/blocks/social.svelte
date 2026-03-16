<script lang="ts">
	import linkedin from '$lib/assets/linkedin.png';
	import github from '$lib/assets/github.png';
	import behance from '$lib/assets/behance.png';
	import artstation from '$lib/assets/artstation.png';
	import bluesky from '$lib/assets/bluesky.png';
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
