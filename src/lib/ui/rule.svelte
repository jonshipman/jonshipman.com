<script lang="ts">
	let className = '';
	$: classes = ['border-none', 'bg-olive', 'pb-1', className].filter((x) => x).join(' ');

	export { className as class };
</script>

<hr class={classes} />
