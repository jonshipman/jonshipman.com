<script lang="ts">
	import { Lightbox } from 'svelte-lightbox';
	import type { Picture } from '@sveltejs/enhanced-img';

	type PropTypes = { src: string | Picture; alt?: string; full: string | Picture };

	let { src, alt = 'portfolio piece', full }: PropTypes = $props();
</script>

<div>
	<Lightbox>
		<div slot="thumbnail">
			<enhanced:img class="block w-full max-w-none rounded-2xl object-cover" {src} {alt} />
		</div>

		<div class="px-8">
			<enhanced:img
				src={full}
				alt="{alt} full"
				class="w-full object-contain"
				style="max-height:75vh"
			/>
		</div>
	</Lightbox>
</div>
