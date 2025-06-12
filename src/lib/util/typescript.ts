export function assertIsHTMLDivElement(element: unknown): asserts element is HTMLDivElement {
	if (!(element instanceof HTMLDivElement)) {
		throw new Error('Expected an HTMLDivElement');
	}
}
