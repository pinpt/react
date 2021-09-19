/**
 * @jest-environment jsdom
 */
import { getRouterRelativePath, getSiteAnalyticsURL, getSiteRSSURL } from '../';

test('Test getRouterRelativePath', () => {
	expect(getRouterRelativePath({ basePath: undefined } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/' } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/blog' } as any, 'https://example.com/blog/foo')).toBe('/blog/foo');
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
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/' } as any, '/rss')).toBe('/blog/rss');
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com' } as any, '/rss')).toBe('/blog/rss');
	expect(getRouterRelativePath({ basePath: '/', url: 'https://example.com/blog' } as any, '/rss')).toBe('/rss');
	expect(
		getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, 'https://example.com/rss')
	).toBe('/blog/rss');
	expect(
		getRouterRelativePath(
			{ basePath: '/blog', url: 'https://example.com/blog' } as any,
			'https://example.com/blog/rss'
		)
	).toBe('/blog/rss');
	expect(getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '')).toBe('/blog');
	expect(
		getRouterRelativePath(
			{ basePath: '/blog', url: 'https://jhaynie.dev/blog' } as any,
			'https://jhaynie.dev/entry/pe3dYzI0PKtCgXPQUufC/GitLab'
		)
	).toBe('/blog/entry/pe3dYzI0PKtCgXPQUufC/GitLab');
});

test('Test getRouterRelativePath when running on different domain', () => {
	expect(
		getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/entry/1', {
			location: { href: 'http://localhost:3001' },
		})
	).toBe('/entry/1');
	expect(
		getRouterRelativePath({ basePath: '/blog', url: 'https://example.com/blog' } as any, '/entry/1', {
			location: { href: 'http://localhost:3001/blog' },
		})
	).toBe('/blog/entry/1');
});
