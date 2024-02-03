<script lang="ts">
	let className = 'contents';

	export { className as class };
</script>

<div class={className}>
	<div class="max-w-7xl w-full px-8 mx-auto">
		<slot />
	</div>
</div>
