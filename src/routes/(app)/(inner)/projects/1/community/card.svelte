<script lang="ts">
	import { tailwind } from '$1/util';

	export let title: string;
	export let href: string;

	const blue = tailwind.theme.colors.blue as any;
</script>

<div class="card rounded-lg p-8 bg-white flex gap-8">
	<div>
		<a {href}>
			<slot name="image" />
		</a>
	</div>

	<div class="text-blue-900">
		<div class="mb-4 text-lg font-medium">{title}</div>

		<div class="mb-4"><slot /></div>

		<div>
			<a {href} class="text-blue-500 font-medium flex gap-2" aria-label="Learn More about {title}">
				<span>Learn More</span>

				<svg
					width="25"
					height="25"
					viewBox="0 0 25 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.25 12.5H20.75"
						stroke={blue.DEFAULT}
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 5.75L20.75 12.5L14 19.25"
						stroke={blue.DEFAULT}
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.card :global(img) {
		@apply object-contain object-top w-72 block;
	}
</style>
