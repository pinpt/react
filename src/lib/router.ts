import { ISite } from './types/site';

const join = (...paths: string[]) => {
	return paths
		.filter(Boolean)
		.map((p) => p.replace(/\/$/, '').replace(/^\//, ''))
		.filter(Boolean)
		.join('/');
};

export const getRouterRelativePath = (site: ISite, url: string, w?: any) => {
	const { basePath = '/' } = site;
	const { pathname } = url.indexOf('https://') === 0 ? new URL(url) : { pathname: url };
	// no custom basepath, just return the pathname part
	if (basePath === '/') {
		return pathname;
	}
	w = w ? w : typeof window !== 'undefined' ? window : undefined;
	if (typeof w !== 'undefined') {
		// if running in the browser, first check to see if we're running inside the same basepath
		const u = new URL(w.location.href);
		if (pathname.startsWith(basePath)) {
			if (u.pathname.startsWith(basePath)) {
				return pathname; // the basepath matches
			}
			return pathname.substring(basePath.length); // remove the basepath from the pathname
		} else {
			// check to main sure the origin is running at the basepath specified
			if (u.pathname.startsWith(basePath)) {
				// add the basepat to the path since it's missing
				return '/' + join(basePath, pathname);
			}
			return pathname; // if the url doesn't have the basepath, just return it as is
		}
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
