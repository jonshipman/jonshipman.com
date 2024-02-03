<script lang="ts">
	export let label = '';
	export let name: string;
	export let type = 'text';
	export let autocomplete = '';
	export let required = false;
	export let placeholder = '';

	let className = '';

	let id = '';
	const elementClass =
		'resize-none block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

	function idgen(node: HTMLInputElement | HTMLTextAreaElement) {
		id = (Math.random() * 10e15).toString(16);
	}

	export { className as class };
</script>

<div class={className}>
	{#if label}
		<label for={id} class="block text-sm font-medium leading-6 dark:text-gray-100 text-gray-900">
			{label}
		</label>
	{/if}
	<div class="mt-2">
		{#if type === 'textarea'}
			<textarea
				{id}
				{name}
				{autocomplete}
				{required}
				{placeholder}
				class={elementClass}
				use:idgen
			/>
		{:else}
			<input
				{id}
				{name}
				{type}
				{autocomplete}
				{required}
				{placeholder}
				class={elementClass}
				use:idgen
			/>
		{/if}
	</div>
</div>
