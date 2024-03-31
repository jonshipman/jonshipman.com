<script lang="ts">
	import dude1 from './dude-1.webp';
	import dude2 from './dude-2.webp';
	import dude3 from './dude-3.webp';
	import dude4 from './dude-4.webp';
	import dude5 from './dude-5.webp';
	import dude6 from './dude-6.webp';

	let className = '';
	export let alt: string;

	const src = getSrc();

	function getSrc(): string {
		const dudes = [dude2, dude1, dude3, dude4, dude5, dude6];
		return dudes[randomInteger(0, dudes.length)];
	}

	function randomInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	export { className as class };
</script>

<img class={className} {src} {alt} loading="lazy" />
