<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$1/container.svelte';
	import type { WpPosts } from '$lib/wp';
	import { Logo } from '$1/brand';
	import { Button } from '$1/form';
	import { FacebookLink } from '$1/location';
	import FreeEstimate from './free-estimate.svelte';
	import Link from './link.svelte';
	import Social from './social.svelte';

	let locations: WpPosts<any>;
	$: locations = $page.data.locations;
	const year = new Date().getFullYear();

	let className = '';

	export { className as class };
</script>

<footer class={className}>
	<FreeEstimate />

	<Container class="pt-16 md:pt-32 pb-16">
		<div class="grid grid-cols-2 md:grid-cols-5 gap-16">
			<div class="col-span-2 flex flex-col items-center">
				<div class="w-1/2">
					<Logo />
				</div>

				<p class="my-8 text-sm text-center font-light md:w-4/5">
					Shamrock Roofing and Construction, your local residential and commercial roofing
					contractors. Our services cover everything from roof repair to specialty commercial
					re-roofs. We are one of the leading roofing companies in our metropolitan areas. Shamrock
					Roofing has been in business for over 45 years.
				</p>

				<Button tall>Get A Free Estimate</Button>
			</div>

			<div class="flex flex-col gap-4 text-right md:text-left">
				<span class="uppercase">Quick Links</span>

				<Link class="justify-end md:justify-start" href="/">Home</Link>
				<Link class="justify-end md:justify-start" href="/">About Us</Link>
				<Link class="justify-end md:justify-start" href="/">Residential Roofing</Link>
				<Link class="justify-end md:justify-start" href="/">Commercial Roofing</Link>
				<Link class="justify-end md:justify-start" href="/">Services</Link>
				<Link class="justify-end md:justify-start" href="/">Locations</Link>
				<Link class="justify-end md:justify-start" href="/">Financing</Link>
				<Link class="justify-end md:justify-start" href="/">News &amp; Blog</Link>
				<Link class="justify-end md:justify-start" href="/">Awards &amp; Certifications</Link>
				<Link class="justify-end md:justify-start" href="/">Community Involvement</Link>
			</div>

			<div class="flex flex-col gap-4">
				<span class="uppercase">Locations</span>

				{#each locations.results as location}
					<Link href={location.link}>{@html location.title.rendered}</Link>
				{/each}
			</div>

			<div class="col-span-2 md:col-span-1 text-center md:text-left">
				<FacebookLink>
					<Social>
						<svg
							slot="icon"
							width="12"
							height="20"
							viewBox="0 0 12 20"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.54888 20V10.8777H10.6096L11.0688 7.32156H7.54888V5.05147C7.54888 4.0222 7.83352 3.32076 9.31117 3.32076L11.1927 3.31999V0.13923C10.8673 0.0969453 9.75039 0 8.45039 0C5.73579 0 3.87733 1.65697 3.87733 4.69927V7.32156H0.807312V10.8777H3.87733V20H7.54888Z"
							/>
						</svg>

						Facebook
					</Social>
				</FacebookLink>

				<Social href="https://linkedin.com">
					<svg
						slot="icon"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<g clip-path="url(#clip0_549_182)">
							<path
								d="M19.995 19.9999V19.999H20V12.664C20 9.07569 19.2275 6.31152 15.0325 6.31152C13.0158 6.31152 11.6625 7.41819 11.11 8.46736H11.0517V6.64652H7.07416V19.999H11.2158V13.3874C11.2158 11.6465 11.5458 9.96319 13.7017 9.96319C15.8258 9.96319 15.8575 11.9499 15.8575 13.499V19.9999H19.995Z"
								fill="white"
							/>
							<path d="M0.330017 6.64746H4.47668V20H0.330017V6.64746Z" fill="white" />
							<path
								d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0_549_182">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>

					Linkedin
				</Social>

				<Social href="https://twitter.com">
					<svg
						slot="icon"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
					>
						<path
							fill="currentColor"
							d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
						/>
					</svg>

					X
				</Social>

				<Social href="https://instagram.com">
					<svg
						slot="icon"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0923 0.0117516 12.7525 0 10.0371 0C7.32172 0 6.98185 0.0117516 5.9152 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812742 2.78573 0.562602 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812742 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48507 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7486 19.9999 13.0885 19.9883 14.1552 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0312 12.7173 20.0312 10.002C20.0312 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8355 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.585 17.9372 15.0538 18.1012 14.0808 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.0522 18.1911 6.00113 18.1441C5.02437 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.9067 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.9067 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.00509 1.87537C7.05999 1.82851 7.37651 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1794 14.0457Z"
							fill="white"
						/>
						<path
							d="M10.0371 4.86426C7.20074 4.86426 4.89941 7.16543 4.89941 10.002C4.89941 12.8385 7.20074 15.1397 10.0371 15.1397C12.8737 15.1397 15.1749 12.8385 15.1749 10.002C15.1749 7.16543 12.8737 4.86426 10.0371 4.86426ZM10.0371 13.3347C8.19702 13.3347 6.70442 11.8422 6.70442 10.002C6.70442 8.16172 8.19702 6.66927 10.0371 6.66927C11.8774 6.66927 13.3698 8.16172 13.3698 10.002C13.3698 11.8422 11.8774 13.3347 10.0371 13.3347Z"
							fill="white"
						/>
						<path
							d="M16.5775 4.66134C16.5775 5.3237 16.0405 5.86077 15.378 5.86077C14.7156 5.86077 14.1785 5.3237 14.1785 4.66134C14.1785 3.99882 14.7156 3.46191 15.378 3.46191C16.0405 3.46191 16.5775 3.99882 16.5775 4.66134Z"
							fill="white"
						/>
					</svg>

					Instagram
				</Social>
			</div>
		</div>

		<div class="mt-16 pt-16 border-t border-gray-800 font-light text-center text-sm">
			&copy; {year}
			{$page.data.local.name}
		</div>
	</Container>
</footer>

<style lang="postcss">
	footer {
		background: linear-gradient(
				178deg,
				theme('colors.yellow.500' / 5%) 13.38%,
				theme('colors.green.DEFAULT' / 5%) 49.94%,
				transparent 91.92%
			),
			theme('colors.blue.950');
		@apply text-white;
	}
</style>
