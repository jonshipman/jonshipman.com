<script lang="ts">
	import { Lightbox } from 'svelte-lightbox';

	type PropTypes = { src: string; alt?: string; full: string };

	let { src, alt = 'portfolio piece', full }: PropTypes = $props();
</script>

<div>
	<Lightbox>
		<img slot="thumbnail" class="block w-full max-w-none rounded-2xl object-cover" {src} {alt} />
		<img src={full} alt="{alt} full" />
	</Lightbox>
</div>
