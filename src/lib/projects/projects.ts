import heartland from './heartland-company.webp';
import trussi from './trussi.webp';
import type { Project } from './types';

export const Projects: Project[] = [
	{
		title: 'Trussi.AI',
		category: 'leadership',
		href: 'https://trussi.ai',
		content:
			'Worked with a team of talented developers to create an industry specific CRM platform. My specific contributions involved: archteching the system using NextJS, React, and MongoDB; managing a team of developers; handling business decisions in terms of meeting deadlines.',
		image: trussi,
		isFeatured: true
	},
	{
		title: 'Theme: HeartLand Company',
		category: 'wordpress',
		href: 'https://heartlandcompany.com/',
		content:
			'Built a custom WordPress theme for a nationwide landscaping company. The theme was built with a focus on automatic deployments, custom Elementor widgets, and data seeding during installation.',
		image: heartland,
		isFeatured: true
	}
];
