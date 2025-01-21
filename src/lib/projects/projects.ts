import remix from './remix.webp';
import sveltekit from './sveltekit.webp';
import tipcalc from './tipcalc.webp';
import type { Project } from './types';

export const Projects: Project[] = [
	{
		title: 'SvelteKit + Pocketbase',
		category: 'boilerplate',
		href: 'https://github.com/jonshipman/sveltekit-pb-boilerplate',
		content:
			'A reusable template for a SvelteKit + Pocketbase website. Includes SSR and CSR authentication and security. Provides screens for login, registration, and forgot password. Easy to use cross-platform setup script.',
		image: sveltekit
	},
	{
		title: 'Tip Calculation Calculator',
		category: 'code',
		color: 'purple',
		href: 'https://github.com/jonshipman/tip-calculator',
		content: 'POC Android application written with Sveltekit, TailwindCSS, and Capacitor.',
		image: tipcalc
	},
	{
		title: 'Remix + Pocketbase',
		category: 'demo',
		color: 'blue',
		href: 'https://github.com/jonshipman/remix-run-examples/commit/73dba077bb3dfbabf70b41ee7908972eee99f22e',
		content:
			"React based implementation of Pocketbase's authentication stack. Includes login, logout, and realtime data demoed. SSR + CSR compatible using HTTP cookie sharing.",
		image: remix
	}
];
