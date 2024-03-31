import type { WpPosts, WpPost } from '$lib/wp';
import { faker } from '@faker-js/faker';
import { award, location, post, review, service } from './config';

type ProjectPost = WpPost & {
	meta: {
		_shcore_to: string;
		heading: string;
		'sub-heading': string;
		cta_link: string;
		cta: string;
		hero_video: number;
		hero_video_webm: number;
		footnotes: string;
	};
};

type ProjectLocation = WpPost & {
	meta: {
		heading: string;
		'sub-heading': string;
		cta_link: string;
		cta: string;
		hero_video: number;
		hero_video_webm: number;
		license_number: string;
		facebook: string;
		number: string;
		google_review: string;
		bbb_link: string;
		city: string;
		state: string;
		street: string;
		street2: string;
		zip: string;
		blog_category: number;
		longitude: number;
		latitude: number;
	};
};

const typedPost = post as unknown as ProjectPost;
const typedLocation = location as unknown as ProjectLocation;
const typedAward = award as unknown as ProjectPost;
const typedService = service as unknown as ProjectPost;
const typedReview = review as unknown as {
	authorName: string;
	authorUrl: string;
	language: string;
	profilePhotoUrl: string;
	rating: number;
	relativeTimeDescription: string;
	text: string;
	time: number;
	location: {
		name: string;
		title: string;
		phoneNumbers: {
			primaryPhone: string;
		};
		storefrontAddress: {
			regionCode: string;
			languageCode: string;
			postalCode: string;
			administrativeArea: string;
			locality: string;
			addressLines: Array<string>;
		};
		websiteUri: string;
		metadata: {
			hasGoogleUpdated: boolean;
			canDelete: boolean;
			canModifyServiceList: boolean;
			placeId: string;
			mapsUri: string;
			newReviewUri: string;
			canHaveBusinessCalls: boolean;
			hasVoiceOfMerchant: boolean;
		};
		profile: {
			description: string;
		};
	};
};

export async function load({ fetch }) {
	const config = {
		heroVideos: [],
		local: {
			logoMedia: {},
			name: 'Vandelay Industries',
			description: 'Importer/Exporter of Fine Latex Goods'
		},
		locations: {
			results: [],
			total: 1
		},
		services: {
			results: [],
			total: 1
		},
		post: typedPost,
		awards: {
			results: [],
			total: 1
		},
		reviews: []
	} as unknown as {
		heroVideos: never[];
		local: { logoMedia: unknown; name: string; description: string };
		locations: WpPosts<ProjectLocation>;
		services: WpPosts<ProjectPost>;
		awards: WpPosts<ProjectPost>;
		post: ProjectPost;
		reviews: Array<{}>;
	};

	let i = getRandomInt(3, 7);
	config.locations.results = faker.helpers.multiple(
		() => {
			const l = {
				...typedLocation,
				id: faker.number.int(),
				meta: {
					...typedLocation.meta,
					number: faker.phone.number(),
					city: faker.location.city(),
					state: faker.location.state({ abbreviated: true }),
					street: faker.location.street(),
					zip: faker.location.zipCode(),
					longitude: faker.location.longitude({ max: 120, min: -110 }),
					latitude: faker.location.latitude({ max: 39, min: 35 })
				}
			};

			l.title.rendered = l.meta.city + ' ' + l.meta.state;
			return l;
		},
		{ count: i }
	);

	i = getRandomInt(3, 7);
	while (i > 0) {
		config.services.results.push(typedService);

		i--;
	}

	i = getRandomInt(3, 7);
	while (i > 0) {
		config.reviews.push({
			...typedReview,
			authorName: faker.person.fullName(),
			text: faker.lorem.paragraph(),
			profilePhotoUrl: `/wp-content/uploads/reviews/${faker.person.firstName()}-150x150.png`,
			location: {
				...typedReview.location,
				storefrontAddress: {
					...typedReview.location.storefrontAddress,
					locality: faker.location.city(),
					administrativeArea: faker.location.state({ abbreviated: true })
				}
			}
		});

		i--;
	}

	i = getRandomInt(8, 15);
	while (i > 0) {
		config.awards.results.push(typedAward);

		i--;
	}

	return config;
}

function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
