<script lang="ts">
	type PropTypes = {
		class?: string;
		label?: string;
		name: string;
		type?: string;
		autocomplete?: AutoFill | null | undefined;
		required?: boolean;
		placeholder?: string;
		rows?: number;
		value?: string;
	};

	let {
		class: className = '',
		label = '',
		name,
		type = 'text',
		autocomplete = null,
		required = false,
		placeholder = '',
		rows = 3,
		value = $bindable('')
	}: PropTypes = $props();

	let id = $state('');
	const elementClass =
		'resize-none block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

	function idgen(node: HTMLInputElement | HTMLTextAreaElement) {
		id = (Math.random() * 10e15).toString(16);
	}
</script>

<div class={className}>
	{#if label}
		<label for={id} class="block text-sm leading-6 font-medium text-gray-900 dark:text-gray-100">
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
				{rows}
				class={elementClass}
				use:idgen
				bind:value
			></textarea>
		{:else}
			<input
				{id}
				{name}
				{type}
				{autocomplete}
				{required}
				{placeholder}
				class={elementClass}
				bind:value
				use:idgen
			/>
		{/if}
	</div>
</div>
