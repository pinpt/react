import { slugifyContent, slugifyString } from '../';

test('Test slugify', () => {
	const res = slugifyString('123 456');
	expect(res).toBe('123-456');
});

test('Test slugify content with no title', () => {
	const res = slugifyContent('123456');
	expect(res).toBe('/entry/123456');
});

test('Test slugify content with title', () => {
	const res = slugifyContent('123456', 'This is a title');
	expect(res).toBe('/entry/123456/This-is-a-title');
});
