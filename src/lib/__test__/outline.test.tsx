import { getDocumentHeadings } from '../';
import entries from '../../components/Documentation/__data__/testEntries.json';

test('Test getDocumentHeadings', () => {
	const res = getDocumentHeadings(entries[0].document);
	expect(res).toEqual([
		{
			id: 'Linked-Content-Blocks',
			level: 1,
			title: 'Linked Content Blocks',
		},
		{
			id: 'Grouping-in-Planning',
			level: 1,
			title: 'Grouping in Planning',
		},
	]);
});
