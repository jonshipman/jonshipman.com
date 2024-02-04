import type { SvelteComponent } from 'svelte';

export interface ScrollDetail {
	scrollY: number;
	top: number;
	left: number;
	height: number;
	width: number;
}

export type ScrollEvent = Event & { detail: ScrollDetail };

export default class Scroll extends SvelteComponent {}
