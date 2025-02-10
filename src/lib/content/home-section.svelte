<script lang="ts">
	import { Container } from '$lib';
	import type { Snippet } from 'svelte';

	let {
		title,
		description,
		subtitle,
		id,
		children
	}: { id?: string; title?: string; description?: string; subtitle?: string; children?: Snippet } =
		$props();
</script>

<Container class="py-16 md:py-32">
	<div class="flex flex-col gap-8" {id}>
		<header class="mb-8 flex items-center">
			<div class="text-balance uppercase md:w-2/3">
				{#if title}
					<div>{title}</div>
				{/if}

				{#if subtitle}
					<div class="text-3xl font-semibold">{subtitle}</div>
				{/if}
			</div>

			{#if description}
				<div class="border-l border-gray-200 pl-8 text-sm md:w-1/3">{description}</div>
			{/if}
		</header>

		{#if children}
			{@render children()}
		{/if}
	</div>
</Container>
