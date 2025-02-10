import heartland from './heartland-company.webp?enhanced';
import trussi from './trussi.webp?enhanced';
import shamrockroofer from './shamrockroofer.webp?enhanced';
import airportservice from './airport-service.webp?enhanced';
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
	}
];
