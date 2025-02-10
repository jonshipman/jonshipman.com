declare global {
	namespace App {
		declare module '*?enhanced&w=360' {
			import type { Picture } from 'vite-imagetools';

			const value: Picture;
			export default value;
		}
	}
}

export {};
