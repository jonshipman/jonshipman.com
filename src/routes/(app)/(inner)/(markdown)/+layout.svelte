<script lang="ts">
	import { Back } from '$lib/icons';
</script>

<div class="print:hidden">
	<a href="/" class="flex items-center">
		<Back width="20" height="20" class="inline-block mr-2" /> Back
	</a>
</div>

<div class="no-tailwind">
	<slot />
</div>
