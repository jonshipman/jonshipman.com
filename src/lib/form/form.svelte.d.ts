import type { SvelteComponentTyped } from 'svelte';
import type { ActionResult } from '@sveltejs/kit';

export type ActionUpdate = (
	options?:
		| {
				reset?: boolean | undefined;
				invalidateAll?: boolean | undefined;
		  }
		| undefined
) => Promise<void>;

export type Result = ActionResult<Record<string, unknown>>;

export default class Form extends SvelteComponentTyped {}
