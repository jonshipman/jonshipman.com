<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { InView } from '$lib/effects';
	import Container from '$1/container.svelte';
	import { Spinner } from '$1/effects';
	import { Button } from '$1/form';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import man from './man.webp';

	let loading = false;
	let error = '';
	let success = '';
	let activated = false;

	$: error = $page.form?.footerError || '';
	$: success = $page.form?.footerSuccess || '';

	const handleSubmit: SubmitFunction = function () {
		if (loading) return;

		loading = true;
		error = '';
		success = '';

		return ({ update, result }) => {
			return update()
				.then(() => applyAction(result))
				.finally(() => {
					loading = false;
				});
		};
	};
</script>

<div class="bg-blue-100 text-blue-900 py-16 overflow-hidden">
	<Container>
		<div class="grid gap-44 grid-cols-1 lg:grid-cols-2">
			<InView class="relative hidden lg:block" always>
				<img
					src={man}
					alt="Shamrock Man"
					class="absolute -top-14 right-0 object-cover w-112 block transition-opacity"
					transition:fly={{ x: -150 }}
				/>
			</InView>
			<div>
				<div class="text-3xl lg:text-5xl font-semibold">
					<div class="lg:leading-13">
						<div>
							Let us show you the <br class="hidden lg:block" />
							Shamrock difference&hellip;
						</div>
						<div class="text-orange-500">get a FREE Estimate</div>
					</div>
				</div>

				<p class="my-8 text-lg">
					Don't let roof worries rain on your parade! Get a free quote from Shamrock Roofing &
					Construction and discover top-notch service and peace of mind.
				</p>

				<form
					action="/contact/?/footer"
					method="POST"
					use:enhance={handleSubmit}
					class="bg-white rounded-lg drop-shadow-2xl p-2 flex gap-4 items-center"
				>
					<input
						type="email"
						name="email"
						required
						placeholder="Email address"
						class="grow indent-4 outline-0"
						on:focus={() => {
							activated = true;
						}}
					/>

					{#if loading}
						<Spinner />
					{/if}

					{#if error}
						<div class="relative -top-10">
							<div
								transition:fly={{
									x: 0,
									y: '-100%',
									easing: cubicInOut,
									duration: 800,
									delay: 0,
									opacity: 100
								}}
								class="absolute -translate-x-1/2 bottom-full w-screen max-w-48 text-xs p-4 text-center leading-none bg-red-600 rounded text-white drop-shadow"
							>
								{error}
							</div>
						</div>
					{/if}

					{#if success}
						<div class="relative -top-10">
							<div
								transition:fly={{
									x: 0,
									y: '-100%',
									easing: cubicInOut,
									duration: 800,
									delay: 0,
									opacity: 100
								}}
								class="z-10 absolute -translate-x-1/2 bottom-full w-screen max-w-48 text-xs p-4 text-center leading-none bg-green-600 rounded text-white drop-shadow"
							>
								{success}
							</div>
						</div>
					{/if}

					<Button tall>Get A Quote</Button>
				</form>
			</div>
		</div>
	</Container>
</div>
