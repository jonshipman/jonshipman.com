<script lang="ts">
	import { Container } from '$lib';

	let { children } = $props();
</script>

<Container>
	{@render children()}
</Container>
