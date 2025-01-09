<script lang="ts">
	import type { Snippet } from 'svelte';

	type PropTypes = {
		class?: string;
		children: Snippet;
	};

	let { class: className = 'contents', children }: PropTypes = $props();
</script>

<div class={className}>
	<div class="mx-auto w-full max-w-7xl px-8">
		{@render children()}
	</div>
</div>
