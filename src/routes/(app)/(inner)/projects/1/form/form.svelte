<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { Spinner } from '$1/effects';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import Button from './button.svelte';
	import Field from './field.svelte';

	export let action = '/contact/?/hero';

	let error = '';
	let success = '';
	let loading = writable<boolean>(false);

	setContext('loading', loading);

	$: error = $page.form?.error || '';
	$: success = $page.form?.success || '';

	let className = '';
	let activated = false;

	function handleCloseError() {
		error = '';
	}

	const handleSubmit: SubmitFunction = function ({ formData }) {
		if ($loading) return;

		error = '';
		success = '';
		$loading = true;

		return ({ update, result }) => {
			return update()
				.then(() => applyAction(result))
				.finally(() => {
					$loading = false;
				});
		};
	};

	export { className as class };
</script>

<form
	{action}
	method="POST"
	class={className}
	use:enhance={handleSubmit}
	on:mouseenter={() => {
		activated = true;
	}}
>
	<div class="p-12 rounded-3xl bg-white relative drop-shadow">
		<slot>
			<div class="title xl:flex justify-between text-xl font-bold leading-none">
				<span>Request</span>
				<span>A</span>
				<span>FREE</span>
				<span>Estimate</span>
				<span>&mdash;</span>
				<span>let's</span>
				<span>work</span>
				<span>together.</span>
			</div>

			<p class="text-gray-500 my-4">
				Got a project? Need a quick fix? Send us a message and we will get back to you right away.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

			<div class="flex gap-4 items-center">
				<Button shadow>
					<span>Schedule A Free Estimate</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M3.75 12H20.25"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13.5 5.25L20.25 12L13.5 18.75"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Button>

				{#if $loading}
					<Spinner />
				{/if}
			</div>
		</slot>

		{#if error || success}
			<div transition:fade class="flex items-center justify-center relative text-center mt-4">
				<div class="max-w-5xl mx-auto w-full">
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
	</div>
</form>

<style lang="postcss">
	.title span:after {
		content: '\00a0';
	}
</style>
