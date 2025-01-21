import type { DefaultColors } from 'tailwindcss/types/generated/colors';

export type Project = {
	title: string;
	color?: keyof DefaultColors;
	category: string;
	content: string;
	image: string;
	href: string;
	isFeatured: boolean;
};
