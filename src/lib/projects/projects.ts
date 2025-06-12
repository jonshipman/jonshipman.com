import airportserviceFull from './airport-service-full.webp';
import airportservice from './airport-service.webp?enhanced&w=360';
import catholickey from './catholic-key.webp?enhanced&w=360';
import heartlandFullB from './heartland-company-full-b.webp';
import heartlandFullC from './heartland-company-full-c.webp';
import heartlandFullD from './heartland-company-full-d.webp';
import heartlandFullE from './heartland-company-full-e.webp';
import heartlandFull from './heartland-company-full.webp';
import heartland from './heartland-company.webp?enhanced&w=360';
import shamrockroofer from './shamrockroofer.webp?enhanced&w=360';
import spotlightFullB from './spotlight-full-b.webp';
import spotlightFull from './spotlight-full.webp';
import spotlight from './spotlight.webp?enhanced&w=360';
import trussiFull from './trussi-full.webp';
import trussi from './trussi.webp?enhanced&w=360';
import type { Project } from './types';

export const Projects: Project[] = [
	{
		title: 'Trussi.AI',
		category: 'leadership',
		href: 'https://trussi.ai',
		content:
			'Worked with a team of talented developers to create an industry specific CRM platform. My specific contributions involved: archteching the system using NextJS, React, and MongoDB; managing a team of developers; handling business decisions in terms of meeting deadlines.',
		image: trussi,
		fullImages: [trussiFull]
	},
	{
		title: 'Theme: HeartLand Company',
		category: 'wordpress',
		href: 'https://heartlandcompany.com/',
		content:
			'Built a custom WordPress theme for a nationwide landscaping company. The theme was built with a focus on automatic deployments, custom Elementor widgets, and data seeding during installation.',
		image: heartland,
		fullImages: [heartlandFull, heartlandFullB, heartlandFullC, heartlandFullD, heartlandFullE]
	},
	{
		title: 'AirportService.com',
		category: 'php',
		href: 'https://airportservice.com/',
		content:
			"Custom PHP solution built as a frontend and backend to manage sales and data. Included a custom JavaScript widget embed for the client's resellers.",
		image: airportservice,
		fullImages: [airportserviceFull]
	},
	{
		title: 'Shamrock Roofing & Construction',
		category: 'svelte',
		href: 'https://shamrockroofer.com/',
		content:
			"Architected and implemented a Headless WordPress solution with a SvelteKit front-end, utilizing WordPress's embedded REST framework.",
		image: shamrockroofer,
		fullImages: []
	},
	{
		title: 'Spotlight Family Office',
		category: 'wordpress',
		href: 'https://www.spotlightfamilyoffice.com/',
		content:
			'Led the development of a custom WordPress webinar platform, including integration with ConstantContact.',
		image: spotlight,
		fullImages: [spotlightFull, spotlightFullB]
	},
	{
		title: 'Catholic Key',
		category: 'wordpress',
		href: 'https://catholickey.org/',
		content:
			'Designed and built a custom WordPress theme for Catholic Key.  This project utilized React for front-end development and the WordPress REST API to fetch and display dynamic content.',
		image: catholickey,
		fullImages: []
	}
];
