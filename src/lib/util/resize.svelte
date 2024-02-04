<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ResizeStore } from './window-events';
	import type { ResizeDetail } from './resize.svelte.d';

	export let debounce = 0;
	export let mobile: boolean | null = null;

	const dispatch = createEventDispatcher<{ resize: ResizeDetail }>();
	let timeout: ReturnType<typeof setTimeout>;

	function mount(node: HTMLDivElement) {
		const unsub = ResizeStore.subscribe(() => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				const visible = node.offsetParent === null;
				mobile = visible;
				dispatch('resize', { visible: { md: visible } });
			}, debounce);
		});

		return {
			destroy() {
				clearTimeout(timeout);
				unsub();
			}
		};
	}
</script>

<div class="hidden md:block" use:mount />
