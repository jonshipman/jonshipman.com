<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/state';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { onMount, type Snippet } from 'svelte';
	import Button from './button.svelte';
	import Field from './field.svelte';

	type PropTypes = { action?: string | undefined; class?: string; children?: Snippet };

	let { action, class: className = '', children }: PropTypes = $props();

	let honeypot = $state('text');
	let error = $state('');
	let success = $state('');

	$effect(function () {
		error = page.form?.error || '';
		success = page.form?.success || '';
	});

	function handleCloseError(event: Event) {
		event.preventDefault();
		error = '';
	}

	const handleSubmit: SubmitFunction = function () {
		return ({ update, result }) => {
			return update().then(() => applyAction(result));
		};
	};

	onMount(() => {
		honeypot = 'hidden';
	});

	export { className as class };
</script>

<form {action} method="POST" class={className} use:enhance={handleSubmit}>
	{#if error || success}
		<div class="relative flex items-center justify-center text-center mb-6">
			<div class="mx-auto w-full max-w-5xl">
				{#if error}
					<div
						class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700 last:mb-0"
						role="alert"
					>
						{@html error}
						<span class="absolute top-0 right-0 bottom-0 px-4 py-3">
							<svg
								onclick={handleCloseError}
								onkeydown={handleCloseError}
								tabindex={0}
								class="h-6 w-6 fill-current text-red-500"
								role="button"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<title>Close</title>
								<path
									d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
								/>
							</svg>
						</span>
					</div>
				{/if}

				{#if success}
					<div
						class="rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
						role="alert"
					>
						{@html success}
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<input {...{ type: honeypot }} name="phone" />

	{#if children}
		{@render children()}
	{:else}
		<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
			<Field name="name" placeholder="Full Name" label="Name" required />
			<Field name="email" type="email" placeholder="Email Address" label="Email" required />
			<Field
				name="subject"
				type="text"
				label="Subject"
				placeholder="Hey my guy"
				class="md:col-span-2"
			/>
			<Field
				name="message"
				rows={10}
				placeholder="Drop me a line."
				label="Message"
				class="md:col-span-2"
				type="textarea"
			/>
		</div>

		<div class="flex justify-end">
			<Button>Send me a 📨</Button>
		</div>
	{/if}
</form>

<style lang="postcss">
	.title span:after {
		content: '\00a0';
	}
</style>
