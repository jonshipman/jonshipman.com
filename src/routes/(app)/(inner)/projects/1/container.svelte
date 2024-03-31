<script lang="ts">
	let className = 'contents';

	export { className as class };
</script>

<div class={className}>
	<div class="max-w-[88rem] w-full px-4 mx-auto">
		<slot />
	</div>
</div>
