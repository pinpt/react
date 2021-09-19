import { getRouterRelativePath } from '../';

test('Test getRouterRelativePath', () => {
	expect(getRouterRelativePath({ basePath: undefined } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/' } as any, 'https://example.com/foo')).toBe('/foo');
	expect(getRouterRelativePath({ basePath: '/blog' } as any, 'https://example.com/blog/foo')).toBe('/foo');
});
