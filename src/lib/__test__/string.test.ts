import { compactNumber, formatNumber, getTwitterProfileFromURL, slugifyContent, slugifyString } from '../';
import { getQueryString } from '../string';

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

test('Test for compact number', () => {
	expect(compactNumber(2_222)).toEqual('2k');
});

test('Test for format number', () => {
	expect(formatNumber(2_222)).toEqual('2,222');
});

test('Test for extracting twitter profile from url', () => {
	expect(getTwitterProfileFromURL('https://twitter.com/jhaynie')).toEqual('@jhaynie');
	expect(getTwitterProfileFromURL('@jhaynie')).toEqual('@jhaynie');
	expect(getTwitterProfileFromURL('https://foo.com')).toBeUndefined();
	expect(getTwitterProfileFromURL(undefined)).toBeUndefined();
});

test('Test get query string', () => {
	expect(
		getQueryString({
			before: String(false),
			after: String(false),
			site: String(true),
			projection: [].join(','),
		})
	).toEqual('before=false&after=false&site=true&projection=');
});
