<script lang="ts">
	import { InView } from '$lib/effects';

	let className = '';

	export let src: string;
	export let autoplay = false;
	export let controls = false;
	export let loop = false;
	export let mode = 'normal';

	export { className as class };
</script>

<InView
	async={() => import('./player-async.svelte')}
	asyncProps={{
		class: className,
		src,
		autoplay,
		controls,
		loop,
		mode
	}}
/>
