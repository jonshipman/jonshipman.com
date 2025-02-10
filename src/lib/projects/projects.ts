import heartland from './heartland-company.webp?enhanced&w=360';
import trussi from './trussi.webp?enhanced&w=360';
import shamrockroofer from './shamrockroofer.webp?enhanced&w=360';
import airportservice from './airport-service.webp?enhanced&w=360';
import spotlight from './spotlight.webp?enhanced&w=360';
import catholickey from './catholic-key.webp?enhanced&w=360';
import type { Project } from './types';

export const Projects: Project[] = [
	{
		title: 'Trussi.AI',
		category: 'leadership',
		href: 'https://trussi.ai',
		content:
			'Worked with a team of talented developers to create an industry specific CRM platform. My specific contributions involved: archteching the system using NextJS, React, and MongoDB; managing a team of developers; handling business decisions in terms of meeting deadlines.',
		image: trussi
	},
	{
		title: 'Theme: HeartLand Company',
		category: 'wordpress',
		href: 'https://heartlandcompany.com/',
		content:
			'Built a custom WordPress theme for a nationwide landscaping company. The theme was built with a focus on automatic deployments, custom Elementor widgets, and data seeding during installation.',
		image: heartland
	},
	{
		title: 'AirportService.com',
		category: 'php',
		href: 'https://airportservice.com/',
		content:
			"Custom PHP solution built as a frontend and backend to manage sales and data. Included a custom JavaScript widget embed for the client's resellers.",
		image: airportservice
	},
	{
		title: 'Shamrock Roofing & Construction',
		category: 'svelte',
		href: 'https://shamrockroofer.com/',
		content:
			"Architected and implemented a Headless WordPress solution with a SvelteKit front-end, utilizing WordPress's embedded REST framework.",
		image: shamrockroofer
	},
	{
		title: 'Spotlight Family Office',
		category: 'wordpress',
		href: 'https://www.spotlightfamilyoffice.com/',
		content:
			'Led the development of a custom WordPress webinar platform, including integration with ConstantContact.',
		image: spotlight
	},
	{
		title: 'Catholic Key',
		category: 'wordpress',
		href: 'https://catholickey.org/',
		content:
			'Designed and built a custom WordPress theme for Catholic Key.  This project utilized React for front-end development and the WordPress REST API to fetch and display dynamic content.',
		image: catholickey
	}
];
