<script lang="ts">
	export let threshold = 0.5;
	export let async: (() => Promise<{ default: ConstructorOfATypedSvelteComponent }>) | null = null;
	export let asyncProps: any = {};
	export let mounted = false;
	export let notmounted = true;
	export let always = false;
	let className = '';
	let LoadedComponent: null | ConstructorOfATypedSvelteComponent = null;

	function onmount(node: HTMLDivElement) {
		const observer = new IntersectionObserver(
			function (entries) {
				entries.forEach((entry) => {
					mounted = entry.isIntersecting;
					notmounted = !entry.isIntersecting;

					if (async)
						async().then((module) => {
							LoadedComponent = module.default;
						});

					if (entry.isIntersecting && !always) observer.disconnect();
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold
			}
		);

		observer.observe(node);
	}

	export { className as class };
</script>

<div class={className} use:onmount>
	{#if LoadedComponent && mounted}
		<svelte:component this={LoadedComponent} {...asyncProps} />
	{/if}

	{#if mounted}
		<slot />
	{/if}
</div>
