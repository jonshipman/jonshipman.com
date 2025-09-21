<script lang="ts">
	import { Field } from '$lib/form';

	let hours = $state('0');
	let minutes = $state('0');
	let discount = $state('0');
	let total = $state('0');
	const rate = 125;

	$effect(() => {
		const numHours = Number(hours);
		const numDiscount = Number(discount);
		let numMinutes = Number(minutes);

		numMinutes = numMinutes + numHours * 60;

		const asHours = numMinutes / 60;
		const usDollar = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		});

		let numTotal = asHours * rate;
		if (numDiscount > 0) {
			numTotal = numTotal - numTotal * (numDiscount / 100);
		}

		total = usDollar.format(numTotal);
	});
</script>

<div class="space-y-4">
	<div>A simple rate calculator.</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
		<Field name="hours" label="Hours" type="number" bind:value={hours} />
		<Field name="minutes" label="Minutes" type="number" bind:value={minutes} />
		<Field name="discount" label="Discount %" type="number" bind:value={discount} />

		<div>
			<div class="block text-sm font-medium leading-6 text-gray-900">&nbsp;</div>
			<div>{total}</div>
		</div>
	</div>
</div>
