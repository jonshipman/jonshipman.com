<script lang="ts">
	import Portfolio from '$lib/blocks/portfolio.svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="Denver-based illustrator and graphic designer specializing in digital art, logos, portraiture, and book illustrations. Professional design for web and print. "
	/>
</svelte:head>

<div class="mx-auto w-full max-w-3xl">
	<div class="mb-8">
		<p class="text-sm text-gray-600">
			Based in Denver, Colorado, I am a professional illustrator and graphic designer specializing
			in high-quality digital artwork, custom logos, portraiture, and book illustrations. My studio
			offers a full suite of creative services, ranging from bespoke vector art to professional
			graphic design for both web and print. Whether you need evocative storytelling through
			illustration or clean, impactful branding, I provide tailored visual solutions that help your
			project stand out.
		</p>
	</div>

	<div>
		<Portfolio />
	</div>
</div>
