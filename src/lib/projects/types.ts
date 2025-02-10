import type { Picture } from 'vite-imagetools';

export type Project = {
	title: string;
	category: string;
	content: string;
	image: Picture;
	href?: string;
};
