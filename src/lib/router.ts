import { ISite } from './types/site';

export const getRouterRelativePath = (site: ISite, url: string) => {
	const { basePath = '/' } = site;
	const { pathname } = new URL(url);
	if (basePath === '/') {
		return pathname;
	}
	return pathname.substring(basePath.length);
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
