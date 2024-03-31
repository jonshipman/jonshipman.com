<script lang="ts">
	import Star from './star.svelte';

	let className = 'contents';

	export let review: any;

	export { className as class };
</script>

<div class="p-8 rounded-lg bg-white flex flex-col gap-4 text-gray-900 select-none {className}">
	<header class="flex gap-2">
		<div>
			<img
				src={review.profilePhotoUrl}
				alt={review.authorName}
				class="aspect-square rounded-full w-12 object-cover object-center"
				loading="lazy"
			/>
		</div>

		<div>
			<div>{review.authorName}</div>
			<div class="text-xs text-gray-500">
				{review.location.storefrontAddress.locality}, {review.location.storefrontAddress
					.administrativeArea}
			</div>
		</div>
	</header>

	<article class="grow text-xs line-clamp-4">
		{@html review.text}
	</article>

	<footer class="flex gap-1">
		{#each new Array(review.rating).fill(0) as _}
			<Star class="h-4 w-4 fill-orange-500" />
		{/each}
	</footer>
</div>
