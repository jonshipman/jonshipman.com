/**
 * Allows one listener per type in the application.
 * e.g. If you have 500 InView components, you'll only have one scroll listener.
 */
function createWindowEventStore(event: string) {
	const subs: Array<() => void> = [];
	let listener = false;

	function on() {
		for (const cb of subs) {
			cb();
		}
	}

	return {
		subscribe(cb: () => void) {
			subs.push(cb);
			cb();

			if (!listener) {
				window.addEventListener(event, on);
				listener = true;
			}

			return () => {
				const index = subs.findIndex((fn) => fn === cb);
				subs.splice(index, 1);

				if (subs.length < 1) {
					window.removeEventListener(event, on);
					listener = false;
				}
			};
		}
	};
}

export const ResizeStore = createWindowEventStore('resize');
export const ScrollStore = createWindowEventStore('scroll');
