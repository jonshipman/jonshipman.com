<script lang="ts">
	import { PostImage } from '$1/graphics';

	export let award: any;
	export let size: 'full' | 'medium' | 'large';
	let className = '';
	let defaultClasses = 'block w-full object-contain object-center relative z-0';

	export { className as class };
</script>

<span class="block relative">
	{#if award.out}
		<span class="z-10 absolute top-0 left-0 block animate-out">
			<svelte:self award={award.out} class={className} {size} />
		</span>
	{/if}

	{#if award.alt_featured_image?.[size]}
		<img
			class="{className} {defaultClasses}"
			src={award.alt_featured_image[size]}
			alt={award.title.rendered}
			loading="lazy"
		/>
	{:else}
		<PostImage class="{className} {defaultClasses}" post={award} {size} />
	{/if}
</span>
