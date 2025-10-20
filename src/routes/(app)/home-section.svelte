<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import type { Snippet } from 'svelte';

	type PropTypes = {
		src: Picture;
		title: string;
		children: Snippet;
	};

	let { src, title, children }: PropTypes = $props();
</script>

<div class="flex w-full flex-col gap-4 text-center text-slate-600 dark:text-slate-400">
	<h2 class="text-2xl font-bold">{title}</h2>
	<div><enhanced:img class="mx-auto block max-w-full" {src} alt={title} /></div>
	<p class="text-justify text-sm">
		{@render children()}
	</p>
</div>
