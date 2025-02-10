<script lang="ts">
	import type { Snippet } from 'svelte';

	type PropTypes = {
		title: string;
		category: string;
		href?: string;
		children: Snippet;
		image?: Snippet;
	};

	let { title, category, href, children, image }: PropTypes = $props();
</script>

<div class="project-card space-y-4">
	{#if image}
		<div class="image relative hidden md:block">
			{#if href}
				<a {href} rel="noopen nofollow">
					{@render image()}
				</a>
			{:else}
				<span>
					{@render image()}
				</span>
			{/if}
		</div>
	{/if}

	<header class="flex items-center">
		{#if title}
			<div class="line-clamp-1 grow font-semibold" {title}>{title}</div>
		{/if}

		{#if category}
			<div class="ml-4 select-none border-l border-gray-300 pl-4 text-xs text-gray-700">
				{category}
			</div>
		{/if}
	</header>

	{#if children}
		<div class="text-sm">
			{@render children()}
		</div>
	{/if}
</div>
