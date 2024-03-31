<script lang="ts">
	import { Button } from '$1/form';

	export let button = false;
	export let inverted = false;
	let className = '';

	$: phoneNumber = '';
	$: link = 'tel:+' + phoneNumber;

	export { className as class };
</script>

{#if button}
	<Button href={link} {inverted} class={className}>
		<slot />
		{phoneNumber}
	</Button>
{:else}
	<a href={link} class={className}>
		<slot />
		<span>{phoneNumber}</span>
	</a>
{/if}
