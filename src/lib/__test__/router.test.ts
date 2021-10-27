/**
 * @jest-environment jsdom
 */
import { getRouterAbsolutePath, getRouterRelativePath, getSiteAnalyticsURL, getSiteRSSURL } from '../';

test('Test getRouterRelativePath', () => {
	expect(getRouterRelativePath({ basePath: undefined } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/' } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/blog' } as any, 'https://example.com/blog/foo')).toBe('/foo');
	expect(
		getRouterRelativePath(
			{ basePath: '/blog', siteUrl: 'https://jhaynie.dev/blog' } as any,
			'https://jhaynie.dev/blog/entry/1'
		)
	).toBe('/entry/1');
});

test('Test getSiteAnalyticsURL', () => {
	expect(getSiteAnalyticsURL({ basePath: undefined } as any)).toBe('/a.js');
	expect(getSiteAnalyticsURL({ basePath: '/' } as any)).toBe('/a.js');
	expect(getSiteAnalyticsURL({ basePath: '/blog', url: 'https://example.com/blog' } as any)).toBe(
		'https://example.com/blog/a.js'
	);
});

test('Test getSiteRSSURL', () => {
	expect(getSiteRSSURL({ basePath: undefined } as any)).toBe('/rss');
	expect(getSiteRSSURL({ basePath: '/' } as any)).toBe('/rss');
	expect(getSiteRSSURL({ basePath: '/blog', url: 'https://example.com/blog' } as any)).toBe(
		'https://example.com/blog/rss'
	);
});

test('Test getRouterRelativePath with missing base', () => {
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/' } as any, '/rss')).toBe('/rss');
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com' } as any, '/rss')).toBe('/rss');
	expect(getRouterRelativePath({ basePath: '/', url: 'https://example.com/blog' } as any, '/rss')).toBe('/rss');
	expect(
		getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, 'https://example.com/rss')
	).toBe('/rss');
	expect(
		getRouterRelativePath(
			{ basePath: '/blog', url: 'https://example.com/blog' } as any,
			'https://example.com/blog/rss'
		)
	).toBe('/rss');
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '')).toBe('/');
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/')).toBe('/');
	expect(
		getRouterRelativePath(
			{ basePath: '/blog', url: 'https://jhaynie.dev/blog' } as any,
			'https://jhaynie.dev/entry/pe3dYzI0PKtCgXPQUufC/GitLab'
		)
	).toBe('/entry/pe3dYzI0PKtCgXPQUufC/GitLab');
});

test('Test getRouterRelativePath when running on different domain', () => {
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/entry/1')).toBe(
		'/entry/1'
	);
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/entry/1')).toBe(
		'/entry/1'
	);
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/entry/1')).toBe(
		'/entry/1'
	);
});

test('Test getRouterAbsolutePath', () => {
	expect(getRouterAbsolutePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/subscribe')).toBe(
		'https://example.com/blog/subscribe'
	);
	expect(getRouterAbsolutePath({ url: 'https://example.com/blog' } as any, '/subscribe')).toBe(
		'https://example.com/subscribe'
	);
});
