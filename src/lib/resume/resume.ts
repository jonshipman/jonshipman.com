const experience = new Date().getFullYear() - 2007;

export const resume = {
	shortdesc: 'Jon Shipman • Fullstack Development & Design',
	summary:
		'Frontend architect with ' +
		experience +
		' years of experience designing scalable, reusable systems that accelerate developer velocity and deliver responsive user experiences. Skilled at bridging design and engineering to ship performant, maintainable, and accessible products at scale.',
	skills: {
		frontend: [
			'React',
			'Angular',
			'Vue',
			'Svelte',
			'Next.js',
			'TypeScript',
			'Tailwind',
			'Webpack',
			'Jest',
			'Playwright'
		],
		backend: ['Laravel', 'Node.js', 'MySQL', 'MongoDB', 'WordPress', 'Drupal', 'Magento', 'Java'],
		tools: ['Docker', 'GitHub Actions', 'AWS', 'GCP', 'Storybook', 'Stripe', 'GTM'],
		design: ['Figma', 'Adobe CC', 'Clip Studio Paint', 'SVG Optimization', 'Accessibility (WCAG)']
	},
	education: 'Truman State University - BFA, 2007',
	work: [
		{
			company: 'Jon Shipman LLC',
			title: 'Founder / Principal Consultant',
			start: 'Jan 2025',
			end: 'Current',
			desc: [
				'Founded a full-stack UI/UX Development company.',
				'Deliver custom software solutions tailored to client needs.',
				'Provide ongoing maintenance and updates for client websites.'
			]
		},
		{
			company: 'Shae Marcus Consulting',
			title: 'Senior Software Engineer / Lead Developer',
			start: 'Oct 2014',
			end: 'Dec 2024',
			desc: [
				'Managed 40+ production websites with 99.9% uptime and automated deployment pipelines.',
				'Wrote the proposal and executed a custom LAMP site for managing limo/driver rentals to and from airports. Included a JavaScript embed distributed to client’s partner websites.',
				'Handled ecommerce migration from Accrisoft into Magento 2. Designed and developed within the Magento 2 platform and performed data transcoding. (wpiinc.com)',
				'Developed custom client software utilizing React for bespoke UI/UX administrative panels within the WordPress ecosystem.',
				'Communicated directly with clients, provided progress reports, and bridged the gap between design and programming when needed.',
				'Led a 10-person dev team delivering a full-stack CRM that improved client onboarding time by 40%. Oversaw DevOps and mentored junior developers. Provided vital direction and decision making for the project taking it to the finish line in December 2024.'
			]
		},
		{
			company: 'Top Pro Media Group',
			title: 'Front End Web Developer',
			start: 'Jun 2013',
			end: 'Oct 2014',
			desc: [
				'Assisted with the maintenance, design needs, and build-out of 30 WordPress websites.',
				'Built and designed a custom directory on top of WordPress of doctors. Utilized browser geolocation to provide users with location specific results.',
				'Held an active role with client satisfaction and implementation of designs and development.',
				'Data migration tasks.'
			]
		},
		{
			company: 'Gateway Instructional Design Group, LLC',
			title: 'Design And Development Engineer',
			start: 'Jan 2012',
			end: 'Jun 2013',
			desc: [
				'Front End platform UI/UX for gatewayidg.com, a custom learning management software. Responsible for CSS/HTML/JavaScript development. Built in Laravel with a traditional AJAX/jQuery frontend stack.'
			]
		},
		{
			company: 'Strategic Internet Solutions',
			title: 'Frontend Web Developer',
			start: 'Jan 2010',
			end: 'Jan 2012',
			desc: [
				'Assisted with the maintenance, design needs, and build-out over 20 WordPress websites.',
				'Design and development of an industry specific mobile application. Handled on-site discovery and QA. Application was written for Android 2.1 and was used on the field for work documentation (camera) and office tracking of job progress (gps).'
			]
		},
		{
			company: 'Chord Media Group',
			title: 'Web Developer',
			start: 'Nov 2009',
			end: 'Jan 2010',
			desc: [
				'Designed and developed purehealthmedical.com working with the client on revisions and feedback.'
			]
		},
		{
			company: 'Favorite Healthcare Staffing',
			title: 'Web Project Associate',
			start: 'Sept 2007',
			end: 'Jan 2009',
			desc: [
				'Managed web projects for a large nationwide company and helped train branch managers on new additions to the corporate intranet.',
				'Designed graphics for internal use (corporate parties, handbooks, email templates, large print design).',
				'Formatted and designed the monthly newsletter.'
			]
		}
	]
};
