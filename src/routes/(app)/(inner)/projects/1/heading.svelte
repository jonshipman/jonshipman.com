<div class="font-semibold text-3xl md:text-6xl text-center" class:mb-6={!$$slots.text}>
	<slot name="heading" />
</div>

{#if $$slots.text}
	<p class="text-center my-6 md:my-12 md:w-1/2 max-w-full mx-auto">
		<slot name="text" />
	</p>
{/if}
