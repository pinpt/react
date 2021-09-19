import { ISite } from './types/site';

const join = (...paths: string[]) => {
	return paths
		.filter(Boolean)
		.map((p) => p.replace(/\/$/, '').replace(/^\//, ''))
		.filter(Boolean)
		.join('/');
};

export const getRouterRelativePath = (site: ISite, url: string) => {
	const { basePath = '/', url: siteUrl } = site;
	const { pathname } = url.indexOf('https://') === 0 ? new URL(url) : { pathname: url };
	// no custom basepath, just return the pathname part
	if (basePath === '/') {
		return pathname;
	}
	// the url has the same basepath prefix as set, we can just return it
	if (pathname.startsWith(basePath)) {
		return pathname;
	}
	// otherwise, the url path is missing the basepath so we need to add it
	return '/' + join(basePath, pathname);
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
