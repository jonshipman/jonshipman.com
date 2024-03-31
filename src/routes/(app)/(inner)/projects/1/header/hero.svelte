<script lang="ts">
	import { page } from '$app/stores';
	import { InView } from '$lib/effects';
	import Container from '$1/container.svelte';
	import { Button, Form } from '$1/form';
	import { fly } from 'svelte/transition';

	let postMeta: any;

	$: postMeta = $page.data.post?.meta;
</script>

<Container>
	<div class="flex flex-wrap md:flex-nowrap items-center gap-6 pt-16 md:pt-0">
		<div class="w-full md:w-7/12 text-white">
			<div class="uppercase tracking-wideaholic mb-4 leading-none">
				{#if postMeta['sub-heading']}
					{@html postMeta['sub-heading']}
				{:else}
					For Over 55 Years
				{/if}
			</div>

			<div class="text-3xl md:text-7xl font-bold md:leading-16">
				{#if postMeta.heading}
					<div>{postMeta.heading}</div>
				{:else}
					<div>
						<span class="text-orange-500">We</span>
						Love
						<span class="text-orange-500">The</span>
					</div>
					<div>Community</div>
					<div class="text-orange-500">We Serve</div>
				{/if}
			</div>

			<div class="flex gap-6 mt-6">
				<Button shadow tall href="/contact">Get A Free Quote</Button>
				<Button tall outline href="/services">Our Services</Button>
			</div>
		</div>

		<InView class="w-full md:w-5/12">
			<div transition:fly={{ x: '100%' }}>
				<Form class="-mb-12 mt-16 md:mt-0" />
			</div>
		</InView>
	</div>
</Container>
