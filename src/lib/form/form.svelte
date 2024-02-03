<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Button from './button.svelte';
	import Field from './field.svelte';

	export let action = '/contact/';

	$: error = $page.form?.error || '';
	$: success = $page.form?.success || '';

	let className = '';

	function handleCloseError() {
		error = '';
	}

	export { className as class };
</script>

<form {action} method="POST" class={className} use:enhance>
	<div class="p-12 rounded-3xl bg-white relative drop-shadow">
		{#if error || success}
			<div transition:fade class="flex items-center justify-center relative text-center">
				<div class="z-10 absolute bottom-16 max-w-5xl mx-auto w-full">
					{#if error}
						<div
							class="mb-4 last:mb-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
							role="alert"
						>
							{@html error}
							<span class="absolute top-0 bottom-0 right-0 px-4 py-3">
								<svg
									on:click|stopPropagation={handleCloseError}
									on:keydown|stopPropagation={handleCloseError}
									tabindex={0}
									class="fill-current h-6 w-6 text-red-500"
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
							class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
							role="alert"
						>
							{@html success}
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<slot>
			<div class="grid grid-cols-2 gap-4">
				<Field name="name" placeholder="Full Name" label="Name" required />
				<Field name="email" type="email" label="Email" placeholder="Email address" required />
				<Field name="phone" type="tel" placeholder="Phone Number" label="Phone Number" />
				<Field name="zip" placeholder="Zip Code" label="Zip Code" />
			</div>

			<Field
				class="mt-4 mb-6"
				name="message"
				placeholder="Tell us about your project."
				label="Message"
				type="textarea"
			/>

			<Button>Send me a 📨</Button>
		</slot>
	</div>
</form>

<style lang="postcss">
	.title span:after {
		content: '\00a0';
	}
</style>
