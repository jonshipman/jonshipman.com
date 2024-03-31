<script lang="ts">
	import { Button } from '$1/form';
	import { Dude } from '$1/graphics';
	import Container from './container.svelte';
	import { Awards } from './awards';
	import { Community } from './community';
	import Map from './map.svelte';
	import { Services } from './services';
	import Testimonials from './testimonials.svelte';

	export let data;
</script>

<div class="relative z-0">
	<Container class="relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-2 max-md:pb-4">
			<div class="p-16 md:py-44 md:pr-32 bg-white">
				<Dude class="select-none" alt={data.local.name} />
			</div>

			<div
				class="rounded-2xl md:rounded-none bg-orange-500 text-white p-6 md:p-0 md:pl-32 flex items-center"
			>
				<div class="text-center md:text-left">
					<div class="text-3xl md:text-6xl font-bold md:leading-16 select-none">
						A Roofer You <br class="hidden md:block" />
						Can Trust
					</div>

					<p class="text-lg my-8 md:leading-loose select-none">
						Shamrock Roofing and Construction is your local residential and commercial roofing
						contractors. Our services cover everything from roof repair to specialty commercial
						re-roofs. We are one of the leading roofing companies in our metropolitan areas.
					</p>

					<Button tall wide class="text-sm" href="/services" name="Learn More about our Services">
						Learn More
					</Button>
				</div>
			</div>
		</div>
	</Container>

	<div class="hidden md:block absolute left-1/2 right-0 top-0 bottom-0 bg-orange-500" />
</div>

<Services />

<Map>
	<Community class="mt-16" />
</Map>

<Awards />

<Testimonials />
