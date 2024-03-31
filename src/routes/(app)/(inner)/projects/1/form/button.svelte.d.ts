import type { SvelteComponentTyped } from 'svelte';

export interface ButtonProps {
	class: string;
	tabindex?: number;
	'aria-label'?: string;
}

export default class Button extends SvelteComponentTyped {}
