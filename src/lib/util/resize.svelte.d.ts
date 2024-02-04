import type { SvelteComponent } from 'svelte';

export interface ResizeDetail {
	visible: { md: boolean };
}

export type ResizeEvent = Event & { detail: ResizeDetail };

export default class Resize extends SvelteComponent {}
