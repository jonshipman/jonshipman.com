<script lang="ts">
	import { page } from '$app/stores';
	import { tailwind } from '$1/util';
	import type { WpPosts } from '$lib/wp';
	import Container from '$1/container.svelte';
	import { house } from '$1/graphics';
	import Heading from '../heading.svelte';
	import church from './church.webp';
	import hail from './hail.webp';
	import ServiceCard from './service-card.svelte';

	$: locations = $page.data.locations as WpPosts<any>;

	const darkBlue = tailwind.theme.colors.blue[900];
	const white = tailwind.theme.colors.white;
</script>

<div class="pt-16 text-blue-500 bg-blue-100 pb-16 md:pb-0 relative z-10">
	<Container>
		<Heading>
			<span slot="heading">Our Services</span>

			<span slot="text">
				In an continual effort to bring our quality of work and dedication to service to the rest of
				the USA, we have {locations.results.length} locations to better serve you.
			</span>
		</Heading>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-32">
			<ServiceCard title="New Roof & Roof Repair" bg={house}>
				<svelte:fragment slot="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="85"
						height="85"
						viewBox="0 0 85 85"
						fill="none"
					>
						<path
							d="M71.7188 71.7187V38.3625C71.7188 37.9924 71.6414 37.6264 71.4917 37.2879C71.342 36.9495 71.1232 36.646 70.8493 36.3971L44.285 12.2467C43.796 11.8022 43.1589 11.5559 42.4981 11.5559C41.8373 11.5559 41.2002 11.8023 40.7112 12.2468L14.1505 36.3971C13.8767 36.646 13.658 36.9494 13.5083 37.2879C13.3586 37.6263 13.2812 37.9923 13.2813 38.3624V71.7187"
							stroke={white}
							stroke-width="3.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M5.3125 71.7188H79.6875"
							stroke={white}
							stroke-width="3.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M50.4668 71.7162V53.1224C50.4668 52.418 50.1869 51.7423 49.6888 51.2442C49.1907 50.746 48.515 50.4662 47.8105 50.4662H37.1855C36.4811 50.4662 35.8054 50.746 35.3073 51.2442C34.8092 51.7423 34.5293 52.418 34.5293 53.1224V71.7162"
							stroke={white}
							stroke-width="3.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</svelte:fragment>

				We are here to help! Our specialists are trained to guide you through every decision and
				make the process as smooth as possible.
			</ServiceCard>
			<ServiceCard title="Commercial Roofing" bg={church}>
				<svelte:fragment slot="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="85"
						height="85"
						viewBox="0 0 85 85"
						fill="none"
					>
						<path
							opacity="0.2"
							d="M29.2188 23.9062V71.7188H13.2838C12.5794 71.7188 11.9037 71.4389 11.4056 70.9408C10.9074 70.4426 10.6276 69.767 10.6276 69.0625V26.5625C10.6276 25.858 10.9074 25.1824 11.4056 24.6842C11.9037 24.1861 12.5794 23.9062 13.2838 23.9062H29.2188Z"
							fill={darkBlue}
						/>
						<path
							opacity="0.2"
							d="M55.7838 23.9062V71.7188H71.7188C72.4232 71.7188 73.0989 71.4389 73.597 70.9408C74.0951 70.4426 74.375 69.767 74.375 69.0625V26.5625C74.375 25.858 74.0951 25.1824 73.597 24.6842C73.0989 24.1861 72.4232 23.9062 71.7188 23.9062H55.7838Z"
							fill={darkBlue}
						/>
						<path
							d="M71.7188 23.9062H13.2812C11.8142 23.9062 10.625 25.0955 10.625 26.5625V69.0625C10.625 70.5295 11.8142 71.7188 13.2812 71.7188H71.7188C73.1858 71.7188 74.375 70.5295 74.375 69.0625V26.5625C74.375 25.0955 73.1858 23.9062 71.7188 23.9062Z"
							stroke={white}
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M55.7812 71.7188V18.5938C55.7812 17.1848 55.2215 15.8335 54.2253 14.8372C53.229 13.841 51.8777 13.2813 50.4688 13.2812H34.5312C33.1223 13.2813 31.771 13.841 30.7747 14.8372C29.7785 15.8335 29.2188 17.1848 29.2188 18.5938V71.7188"
							stroke={white}
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</svelte:fragment>
				Shamrock Roofing and Construction is your local commercial roofing specialist.
			</ServiceCard>
			<ServiceCard title="Hail Damage & Repairs" bg={hail}>
				<svelte:fragment slot="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="85"
						height="85"
						viewBox="0 0 85 85"
						fill="none"
					>
						<path
							opacity="0.2"
							d="M29.2185 30.5469C29.2185 26.0814 30.5427 21.7161 33.0236 18.0032C35.5045 14.2902 39.0307 11.3963 43.1564 9.68742C47.282 7.97853 51.8217 7.53141 56.2014 8.40259C60.5811 9.27377 64.6042 11.4241 67.7618 14.5817C70.9194 17.7393 73.0697 21.7624 73.9409 26.1421C74.8121 30.5218 74.365 35.0616 72.6561 39.1872C70.9472 43.3128 68.0533 46.839 64.3404 49.3199C60.6274 51.8008 56.2622 53.125 51.7966 53.125H25.2341C23.1129 53.1232 21.0175 52.6595 19.0936 51.7662C17.1697 50.8728 15.4634 49.5712 14.0933 47.9519C12.7232 46.3325 11.7222 44.4341 11.1598 42.3888C10.5974 40.3435 10.4872 38.2003 10.8368 36.1081C11.1863 34.0159 11.9873 32.0249 13.1841 30.2735C14.3808 28.5221 15.9446 27.0523 17.7667 25.9662C19.5888 24.8802 21.6255 24.204 23.7354 23.9846C25.8452 23.7652 27.9775 24.0079 29.9841 24.6958"
							fill={darkBlue}
						/>
						<path
							d="M42.5 79.6875L51.2158 66.4062"
							stroke={white}
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M32.7881 69.0625L43.2471 53.125"
							stroke={white}
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M29.2185 30.5469C29.2185 26.0814 30.5427 21.7161 33.0236 18.0032C35.5045 14.2902 39.0307 11.3963 43.1564 9.68742C47.282 7.97853 51.8217 7.53141 56.2014 8.40259C60.5811 9.27377 64.6042 11.4241 67.7618 14.5817C70.9194 17.7393 73.0697 21.7624 73.9409 26.1421C74.8121 30.5218 74.365 35.0615 72.6561 39.1872C70.9472 43.3128 68.0533 46.839 64.3404 49.3199C60.6274 51.8008 56.2622 53.125 51.7966 53.125H25.2341C23.1129 53.1232 21.0175 52.6595 19.0936 51.7662C17.1697 50.8728 15.4634 49.5712 14.0933 47.9518C12.7232 46.3325 11.7222 44.4341 11.1598 42.3888C10.5974 40.3435 10.4872 38.2003 10.8368 36.1081C11.1863 34.0159 11.9873 32.0249 13.1841 30.2735C14.3808 28.5221 15.9445 27.0523 17.7667 25.9662C19.5888 24.8802 21.6255 24.204 23.7354 23.9846C25.8452 23.7652 27.9775 24.0079 29.9841 24.6958"
							stroke={white}
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</svelte:fragment>
				Shamrock is happy to provide a free roof inspection if you suspect hail damage.
			</ServiceCard>
		</div>
	</Container>
</div>
