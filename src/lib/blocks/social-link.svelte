<script lang="ts">
	type PropTypes = {
		href: string;
		src: string;
		height?: string;
	};

	let { href, src, height = '4' }: PropTypes = $props();
</script>

<div>
	<a {href} rel="external nofollow noopen" target="_social">
		<img {src} alt={href} class="block max-w-none select-none" style="height: {height}rem" />
	</a>
</div>
