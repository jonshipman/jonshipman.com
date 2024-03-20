import type { Action } from 'svelte/action';

function isListenerEvent<T = never>(event: Event): event is CustomEvent<T> {
	return 'detail' in event;
}

type Options = {
	event: string;
	callback: (detail: never) => void;
};

export const listener: Action<HTMLElement, Options> = function (node: HTMLElement, options) {
	function listen(event: Event) {
		if (isListenerEvent(event)) {
			event.stopImmediatePropagation();
			options.callback(event.detail);
		}
	}

	node.addEventListener(options.event, listen);

	return {
		destroy() {
			node.removeEventListener(options.event, listen);
		}
	};
};

export function dispatch(node: HTMLElement, event: string, payload: unknown) {
	node.dispatchEvent(
		new CustomEvent(event, {
			bubbles: true,
			composed: true,
			cancelable: true,
			detail: payload
		})
	);
}
