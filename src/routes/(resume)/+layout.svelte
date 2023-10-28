<script lang="ts">
	import Back from '$lib/icons/back.svelte';
</script>

<div>
	<a href="/" class="flex items-center">
		<Back width="20" height="20" class="inline-block mr-2" /> Back
	</a>
</div>

<div class="no-tailwind">
	<slot />
</div>
