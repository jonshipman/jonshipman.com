<script lang="ts">
	import type { FieldProps } from '.';

	export let name: string;
	export let label = '';
	export let type = 'text';
	export let placeholder = '';
	export let autocomplete = false;
	export let required = false;
	export let tabindex = 1000;
	export let rows = 3;

	let className = '';
	const elementClasses =
		'block w-full bg-transparent focus:outline-0 resize-none py-4 px-5 border border-gray-200 rounded-lg';

	const id = (Math.random() * 10e15).toString(16);

	const props: FieldProps = {
		type,
		class: elementClasses,
		id,
		name,
		required,
		placeholder
	};
	if (tabindex < 999) props.tabindex = tabindex;
	if (autocomplete) props.autocomplete = 'autocomplete';

	export { className as class };
</script>

<div class="{className} rounded bg-white">
	{#if label}
		<label for={id} class="block text-sm">
			{label}
		</label>
	{/if}

	{#if type === 'textarea'}
		<textarea {rows} {...props} />
	{:else}
		<input {...props} />
	{/if}
</div>

<style>
	:global(.form-field-icon svg) {
		max-height: 100%;
		max-width: 100%;
	}
</style>
