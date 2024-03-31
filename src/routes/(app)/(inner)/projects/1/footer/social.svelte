<script lang="ts">
	interface Props {
		href?: string;
	}

	export let href = '';
	const props: Props = {};

	const tag = href ? 'a' : 'span';
	if (href) props.href = href;
</script>

<svelte:element this={tag} {...props} class="mb-4 block">
	<span
		class="transition-colors rounded-lg bg-white hover:bg-blue-500 hover:bg-opacity-100 bg-opacity-10 inline-flex items-center gap-4 p-3"
	>
		<span><slot name="icon" /></span>

		<span class="bg-white bg-opacity-10 h-6" style="width: 1px;" />

		<span><slot /></span>
	</span>
</svelte:element>
