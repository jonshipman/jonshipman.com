<script lang="ts">
	import type { Picture } from "@sveltejs/enhanced-img";

	type PropTypes = {
		href: string;
		src: string | Picture;
		height?: string;
	};

	let { href, src, height = '4' }: PropTypes = $props();
</script>

<div>
	<a {href} rel="external nofollow noopen" target="_social" title={href}>
		<enhanced:img
			{src}
			alt={href}
			class="block w-auto select-none"
			style="height: {height}rem"
		/>
	</a>
</div>
