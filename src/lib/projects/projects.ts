import remix from './remix.webp';
import sveltekit from './sveltekit.webp';
import tipcalc from './tipcalc.webp';
import trussi from './trussi.webp';
import heartland from './heartland-company.jpg';
import type { Project } from './types';

export const Projects: Project[] = [
	{
		title: 'Trussi.AI',
		category: 'leadership',
		href: 'https://trussi.ai',
		color: 'orange',
		content:
			'Worked with a team of talented developers to create an industry specific CRM platform. My specific contributions involved: archteching the system using NextJS, React, and MongoDB; managing a team of developers; handling business decisions in terms of meeting deadlines.',
		image: trussi,
		isFeatured: true
	},
	{
		title: 'Bespoke WordPress Development: HeartLand Company',
		category: 'wordpress',
		href: 'https://heartlandcompany.com/',
		color: 'green',
		content:
			'Built a custom WordPress theme for a nationwide landscaping company. The theme was built with a focus on automatic deployments, custom Elementor widgets, and data seeding during installation.',
		image: heartland,
		isFeatured: true
	},
	{
		title: 'Tip Calculation Calculator',
		category: 'code',
		color: 'purple',
		href: 'https://github.com/jonshipman/tip-calculator',
		content: 'POC Android application written with Sveltekit, TailwindCSS, and Capacitor.',
		image: tipcalc,
		isFeatured: false
	},
	{
		title: 'Remix + Pocketbase',
		category: 'demo',
		color: 'blue',
		href: 'https://github.com/jonshipman/remix-run-examples/commit/73dba077bb3dfbabf70b41ee7908972eee99f22e',
		content:
			"React based implementation of Pocketbase's authentication stack. Includes login, logout, and realtime data demoed. SSR + CSR compatible using HTTP cookie sharing.",
		image: remix,
		isFeatured: false
	},
	{
		title: 'SvelteKit + Pocketbase',
		category: 'boilerplate',
		href: 'https://github.com/jonshipman/sveltekit-pb-boilerplate',
		color: 'green',
		content:
			'A reusable template for a SvelteKit + Pocketbase website. Includes SSR and CSR authentication and security. Provides screens for login, registration, and forgot password. Easy to use cross-platform setup script.',
		image: sveltekit,
		isFeatured: false
	}
];
