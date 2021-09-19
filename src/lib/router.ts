import { ISite } from './types/site';

export const getRouterRelativePath = (site: ISite, url: string) => {
	const { basePath = '/' } = site;
	const { pathname } = new URL(url);
	if (basePath === '/') {
		return pathname;
	}
	return pathname.substring(basePath.length);
};
