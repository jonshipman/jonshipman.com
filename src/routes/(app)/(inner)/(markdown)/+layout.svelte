<script lang="ts">
	import { Back } from '$lib/icons';

	let { children } = $props();
</script>

<div class="print:hidden">
	<a href="/" class="flex items-center">
		<Back width="20" height="20" class="mr-2 inline-block" /> Back
	</a>
</div>

<div class="no-tailwind">
	{@render children()}
</div>
