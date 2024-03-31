<script lang="ts">
	import { InView } from '$lib/effects';
	import { Button } from '$1/form';
	import Container from '$1/container.svelte';
	import { house } from '$1/graphics';
	import { aha, c4h, cares, veterans } from '.';
	import Heading from '../heading.svelte';
	import CommunityCard from './card.svelte';

	let className = '';

	export { className as class };
</script>

<div class="text-white relative overflow-hidden py-32 {className}">
	<Container class="relative z-20 md:pt-32">
		<Heading>
			<span slot="heading">
				More than just your local roofer, <br class="hidden md:block" />
				we&rsquo;re part of your community
			</span>

			<span slot="text">
				We don't just build roofs; we foster community strength. With every project, we're dedicated
				to constructing more than structures – we build connections that endure.
			</span>
		</Heading>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
			<CommunityCard href="/community/veterans/" title="We Support Our Veterans">
				<img loading="lazy" src={veterans} slot="image" alt="Veterans" />
				<p>
					At Shamrock Roofing and Construction, we proudly support our veteran community through
					dedicated outreach programs and initiatives, ensuring they receive the respect and
					assistance they deserve.
				</p>
			</CommunityCard>

			<CommunityCard
				href="/community/american-heart-association/"
				title="American Heart Association"
			>
				<img loading="lazy" src={aha} slot="image" alt="American Heart Association" />
				<p>
					We're honored to support the American Heart Association's mission of promoting
					cardiovascular health and wellness in our communities, standing together to build
					healthier futures for all
				</p>
			</CommunityCard>

			<CommunityCard href="/community/cars4heroes/" title="Cars 4 Heroes">
				<img loading="lazy" src={c4h} slot="image" alt="Cars 4 Heroes" />
				<p>
					We're proud to show our appreciation for local heroes by offering a special car giveaway
					promotion, providing a token of gratitude to those who selflessly serve our communities
					every day.
				</p>
			</CommunityCard>

			<CommunityCard
				href="/community/community-scholarship/"
				title="Shamrock Cares Community Scholarship"
			>
				<img loading="lazy" src={cares} slot="image" alt="Shamrock Cares" />
				<p>
					We believe in investing in the future of our community, which is why we're proud to offer
					our annual Community Scholarship, empowering deserving individuals to pursue their
					educational aspirations and contribute to a brighter tomorrow.
				</p>
			</CommunityCard>
		</div>

		<div class="flex justify-center">
			<Button shadow tall alt href="/community/">See All Of Our Community Involvement</Button>
		</div>
	</Container>

	<div class="house-bg bg-blue-500 block absolute z-10 select-none opacity-50 top-0 w-full h-full" />

	<InView threshold={0} class="absolute inset-0 z-0">
		<div
			style="--bg: url('{house}');"
			class="house-bg bg-blue-500 block absolute select-none z-0 top-0 w-full h-full bg-cover bg-no-repeat bg-blend-soft-light"
		/>
	</InView>
</div>

<style lang="postcss">
	.house-bg {
		clip-path: none;
		background-image: var(--bg, transparent);
	}

	@screen md {
		.house-bg {
			clip-path: polygon(50% 0, 100% theme('spacing.36'), 100% 100%, 0 100%, 0 theme('spacing.36'));
		}
	}
</style>
