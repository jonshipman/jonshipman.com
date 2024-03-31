import type { SvelteComponentTyped } from 'svelte';

export interface FieldProps {
	type: string;
	tabindex?: number;
	class: string;
	id: string;
	name: string;
	autocomplete?: string;
	required?: boolean;
	placeholder?: string;
}

export default class Field extends SvelteComponentTyped {}
