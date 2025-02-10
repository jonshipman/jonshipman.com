<script lang="ts">
	import TechCard from './tech-card.svelte';

	let { class: className = 'contents' } = $props();

	const options = [
		'*nix administration',
		'BASH',
		'Cpanel',
		'DevOps',
		'Docker',
		'Drupal',
		'eslint',
		'Github Actions',
		'Heroku',
		'MongoDB',
		'MySQL',
		'NextJS',
		'Node.js',
		'prettier',
		'python',
		'React',
		'rollup',
		'Svelte',
		'Symfony',
		'tachyons.io',
		'TailwindCSS',
		'vite',
		'Vue.js',
		'webpack',
		'Responsive Layouts',
		'Google BigQuery',
		'AWS',
		'Google Workspace',
		'pocketbase',
		'sqlite'
	];
</script>

<div class={className}>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<TechCard title="JavaScript">
			{#snippet icon()}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64"
					/>
				</svg>
			{/snippet}

			<p>
				Extensive experience lies in crafting dynamic and efficient client-side applications using
				vanilla JavaScript. Proficient in jQuery for streamlined UI interactions and React for
				building scalable, declarative front-end solutions.
			</p>
		</TechCard>

		<TechCard title="HTML">
			{#snippet icon()}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="m3 2l1.6 17.8L12 22l7.5-2.2L21 2zm14 6H9l.2 2H17l-.6 6.6l-4.2 1.4l-4.3-1.4l-.3-3h2l.2 1.4l2.4.8l2.3-.7l.3-3H7.4L7 6h10.4z"
					/>
				</svg>
			{/snippet}

			<p>
				HTML expertise for creating structured, semantic, &amp; accessible web pages. Specializing
				in building a solid foundation for engaging user experiences.
			</p>
		</TechCard>

		<TechCard title="CSS">
			{#snippet icon()}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zm17.09 4.413L5.41 4.41l.213 2.622l10.125.002l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523l-2.91.804l-2.956-.81l-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53z"
					/>
				</svg>
			{/snippet}

			<p>
				CSS mastery with a keens eye for design, creating visually appealing &amp; responsive
				layouts. Leveraging CSS to enhance UI, ensuring engaging experiences across various devices
				&amp; screen sizes.
			</p>
		</TechCard>

		<TechCard title="PHP">
			{#snippet icon()}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z"
					/>
				</svg>
			{/snippet}

			<p>
				PHP expert specializing in dynamic server-side applications, crafting efficient and scalable
				solutions for custom web applications and content management systems.
			</p>
		</TechCard>

		<TechCard title="WordPress">
			{#snippet icon()}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
					<path
						d="M16.935 128c0 44.012 25.6 81.92 62.622 99.938L26.585 82.806A110.666 110.666 0 0 0 16.935 128M128 239.065c12.898 0 25.305-2.265 36.923-6.302l-.788-1.477l-34.166-93.538l-33.28 96.787c9.846 2.954 20.382 4.53 31.311 4.53m15.262-163.151l40.172 119.434l11.126-37.022c4.726-15.36 8.37-26.388 8.37-35.938c0-13.785-4.924-23.237-9.06-30.523c-5.71-9.256-10.928-17.034-10.928-26.093c0-10.24 7.68-19.692 18.707-19.692h1.379A110.672 110.672 0 0 0 128 16.935a110.967 110.967 0 0 0-92.75 50.019l7.088.197c11.619 0 29.539-1.477 29.539-1.477c6.105-.296 6.794 8.468.788 9.157c0 0-6.007.787-12.8 1.083l40.566 120.32l24.32-72.862l-17.33-47.458a198.203 198.203 0 0 1-11.618-.985c-6.006-.394-5.317-9.55.69-9.255c0 0 18.313 1.477 29.242 1.477c11.619 0 29.539-1.477 29.539-1.477c6.006-.296 6.794 8.468.788 9.157c0 0-6.007.689-12.8 1.083M183.828 224a111.065 111.065 0 0 0 55.237-96c0-19.298-4.923-37.415-13.588-53.268a104.858 104.858 0 0 1-7.68 51.2zM128 256C57.308 256 0 198.692 0 128C0 57.308 57.308 0 128 0c70.692 0 128 57.308 128 128c0 70.692-57.308 128-128 128"
					/>
				</svg>
			{/snippet}

			<p>
				Adept at crafting tailored solutions that align with unique project requirements. From theme
				design and development to plugin customization, the focus is on delivering scalable,
				user-friendly, and feature-rich websites that meet and exceed client expectations.
			</p>
		</TechCard>

		<TechCard title="&hellip;and much more!">
			<div class="flex flex-wrap gap-2 text-xs">
				{#each options as opt}
					<div>{opt}</div>
				{/each}
			</div>
		</TechCard>
	</div>
</div>
