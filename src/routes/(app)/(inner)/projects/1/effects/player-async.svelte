<script lang="ts">
	import '@lottiefiles/lottie-player';
	import { tick } from 'svelte';
	import { fade } from 'svelte/transition';

	interface LottieElement extends Element {
		_lottie: {
			pause: () => void;
			play: () => void;
			stop: () => void;
		};
	}

	let playFn: null | (() => void) = null;
	let stopFn: null | (() => void) = null;

	let className = '';
	export let src: string;
	export let autoplay = false;
	export let controls = false;
	export let loop = false;
	export let mode = 'normal';

	$: {
		if (playFn && autoplay) playFn();
		if (stopFn && !autoplay) stopFn();
	}

	function player(node: LottieElement) {
		tick().then(() => {
			const detail = {
				pause: node._lottie.pause.bind(node._lottie),
				play: node._lottie.play.bind(node._lottie),
				stop: node._lottie.stop.bind(node._lottie)
			};

			playFn = detail.play;
			stopFn = detail.stop;
		});
	}

	export { className as class };
</script>

<lottie-player
	transition:fade
	use:player
	class={className}
	{autoplay}
	{controls}
	{loop}
	{mode}
	{src}
></lottie-player>
