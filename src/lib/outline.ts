import { slugifyString } from './string';

export interface IDocumentContent {
	attrs?: Record<string, string | number>;
	type?: string;
	text?: string;
	content?: IDocumentContent[];
}

export interface IDocumentHeading {
	title: string;
	level: number;
	id: string;
}

// calculates a unique slug for this heading based on it's text and position
// in the document that is as stable as possible
function headingToSlug(text: string, index = 0) {
	const slugified = slugifyString(text);
	if (index === 0) return slugified;
	return `${slugified}-${index}`;
}

export const getDocumentHeadings = (document: any, title = '', levels = [1]) => {
	const content = document.content as IDocumentContent[];
	const headings: IDocumentHeading[] = [];
	const previouslySeen: Record<string, number> = {};

	content.forEach((node) => {
		if (node.type === 'heading' && node.attrs?.level && levels.includes(node.attrs.level as number)) {
			if (
				node.content?.[0].type === 'text' &&
				node.content?.[0].text &&
				headingToSlug(node.content[0].text.toLowerCase()) !== headingToSlug(title.toLowerCase())
			) {
				const slug = headingToSlug(node.content[0].text);
				let id = slug;

				// check if we've already used it, and if so how many times?
				// Make the new id based on that number ensuring that we have
				// unique ID's even when headings are identical
				if (previouslySeen[slug] > 0) {
					id = headingToSlug(node.content[0].text, previouslySeen[slug]);
				}

				// record that we've seen this slug for the next loop
				previouslySeen[slug] = previouslySeen[slug] !== undefined ? previouslySeen[slug] + 1 : 1;

				headings.push({
					title: node.content[0].text,
					level: node.attrs.level as number,
					id,
				});
			}
		}
	});

	return headings;
};
