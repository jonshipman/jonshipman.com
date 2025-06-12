import type { Picture } from 'vite-imagetools';

export type Project = {
	title: string;
	category: string;
	content: string;
	image: Picture;
	fullImages: Array<Picture | string>;
	href?: string;
};
