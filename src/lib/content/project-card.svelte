<script lang="ts">
	import { tailwind } from '$lib/util';
	import { Button } from '$lib/form';

	export let color: keyof typeof tailwind.theme.colors = 'green';
	export let title: string;
	export let category: string;
	export let href: string;

	const c = {
		400: tailwind.theme.colors[color][400],
		600: tailwind.theme.colors[color][600],
		800: tailwind.theme.colors[color][800],
		950: tailwind.theme.colors[color][950]
	};
</script>

<div
	class="wrapper rounded-2xl p-8 select-none grid grd-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
	style="background-color: {c[400]}; color: {c[800]};"
>
	<div class="text">
		<div class="uppercase">{category}</div>
		<div class="font-semibold text-3xl" style="color: {c[950]};">
			<a {href} rel="noopen nofollow">
				{title}
			</a>
		</div>

		<div class="leading-loose my-4">
			<slot />
		</div>

		<Button --color={c[800]} --color-hover={c[600]} {href} rel="noopen nofollow">
			<span>Go</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 rotate-135" viewBox="0 0 512 512">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linejoin="round"
					stroke-width="32"
					d="M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256Z"
				/>
			</svg>
		</Button>
	</div>
	<div class="image relative hidden md:block">
		<slot name="image" />
	</div>
</div>

<style lang="postcss">
	.wrapper:nth-child(even) .image {
		order: 1;
	}

	.wrapper:nth-child(even) .text {
		order: 2;
	}

	.wrapper :global(img) {
		@apply absolute left-0 transition-transform;
	}

	.wrapper:hover :global(img) {
		@apply -translate-y-4;
	}
</style>
