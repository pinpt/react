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
	const { pathname } = new URL(url);
	if (basePath === '/') {
		return pathname;
	}
	if (site.url.includes(basePath)) {
		return pathname.substring(basePath.length);
	}
	// we have a url where the basepath isn't part of it so we need to
	// repair the url. this can happen when you have search results
	// but the basepath was changed before updated.
	if (url.charAt(0) === '/') {
		return basePath + url;
	}
	return join(site.url, basePath, url);
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
