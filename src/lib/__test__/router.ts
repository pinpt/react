import { getRouterRelativePath, getSiteAnalyticsURL, getSiteRSSURL } from '../';

test('Test getRouterRelativePath', () => {
	expect(getRouterRelativePath({ basePath: undefined } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/' } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/blog' } as any, 'https://example.com/blog/foo')).toBe('/foo');
});

test('Test getSiteAnalyticsURL', () => {
	expect(getSiteAnalyticsURL({ basePath: undefined } as any)).toBe('/a.js');
	expect(getSiteAnalyticsURL({ basePath: '/' } as any)).toBe('/a.js');
	expect(getSiteAnalyticsURL({ basePath: '/blog', url: 'https://example.com/blog' } as any)).toBe(
		'https://example.com/blog/blog/a.js'
	);
});

test('Test getSiteRSSURL', () => {
	expect(getSiteRSSURL({ basePath: undefined } as any)).toBe('/rss');
	expect(getSiteRSSURL({ basePath: '/' } as any)).toBe('/rss');
	expect(getSiteRSSURL({ basePath: '/blog', url: 'https://example.com/blog' } as any)).toBe(
		'https://example.com/blog/blog/rss'
	);
});
