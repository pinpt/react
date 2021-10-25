import { ISite } from './types/site';

const join = (...paths: string[]) => {
	return paths
		.filter(Boolean)
		.map((p) => p.replace(/\/$/, '').replace(/^\//, ''))
		.filter(Boolean)
		.join('/');
};

export const getRouterRelativePath = (site: ISite, url: string) => {
	const { basePath = '/' } = site;
	const { pathname } = url.indexOf('https://') === 0 ? new URL(url) : { pathname: url };
	if (pathname.indexOf(basePath) === 0) {
		return '/' + join(pathname.substring(basePath.length));
	}
	return '/' + join(pathname);
};

export const getRouterAbsolutePath = (site: ISite, url: string) => {
	const { basePath = '/', url: siteUrl } = site;
	const { pathname } = url.indexOf('https://') === 0 ? new URL(url) : { pathname: url };
	const { origin } = new URL(siteUrl);
	return origin + '/' + join(basePath, pathname);
};

export const getSiteRSSURL = (site: ISite) => {
	const { basePath = '/' } = site;
	if (basePath === '/') {
		return '/rss';
	}
	return `${site.url}/rss`;
};

export const getSiteAnalyticsURL = (site: ISite) => {
	const { basePath = '/' } = site;
	if (basePath === '/') {
		return '/a.js';
	}
	return `${site.url}/a.js`;
};
