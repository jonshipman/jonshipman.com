<script lang="ts">
	import { tailwind } from '$1/util';

	export let href: string;
	let className = '';

	const orange = tailwind.theme.colors.orange as any;

	export { className as class };
</script>

<a {href} class="flex gap-2 {className}">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path
			d="M9 4.5L16.5 12L9 19.5"
			stroke={orange.DEFAULT}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<slot />
</a>
