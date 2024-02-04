<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ScrollStore } from './window-events';
	import type { ScrollDetail } from './scroll.svelte.d';

	export let debounce = 0;

	const dispatch = createEventDispatcher<{ scroll: ScrollDetail }>();
	let timeout: ReturnType<typeof setTimeout>;

	function mount(node: HTMLDivElement) {
		const unsub = ScrollStore.subscribe(() => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				const bounds = node.getBoundingClientRect();
				const detail: ScrollDetail = {
					scrollY: window.scrollY,
					top: bounds.top,
					left: bounds.left,
					height: window.outerHeight,
					width: window.outerWidth
				};

				dispatch('scroll', detail);
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

<div use:mount />
