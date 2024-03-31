<script lang="ts">
	let className = '';
	let link = 'https://www.facebook.com';

	export { className as class };
</script>

<a href={link} class={className}>
	<slot />
</a>
