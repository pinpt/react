import fetch from 'isomorphic-unfetch';
import { getAPIUrl } from './env';

import type { Analytics, Entry, Site } from './types';

const defaultUrl = getAPIUrl();

interface FetchOptions {
	apiUrl?: string;
}

export const fetchAnalytics = async (
	siteId: string,
	changelogIds: string[],
	options?: FetchOptions
): Promise<Analytics> => {
	const { apiUrl = defaultUrl } = options || {};
	const url = `${apiUrl}/site/${siteId}/analytics?changelogIds=${encodeURIComponent(JSON.stringify(changelogIds))}`;
	const res = await fetch(url);
	const json = await res.json();
	return json?.data;
};

export const fetchContent = async (id: string, options?: FetchOptions): Promise<Entry> => {
	const { apiUrl = defaultUrl } = options || {};
	const url = `${apiUrl}/changelog/${id}/public/metadata`;
	const res = await fetch(url);
	if (res.ok) {
		const resdata = await res.json();
		if (resdata.success) {
			const { metadata } = resdata;
			return metadata as Entry;
		}
		throw new Error(resdata.message);
	}
	throw new Error('internal server error');
};

export const fetchSite = async (slug: string, options?: FetchOptions): Promise<{ changelogs: Entry[]; site: Site }> => {
	const { apiUrl = defaultUrl } = options || {};
	const url = `${apiUrl}/changelog/list/${slug}/slug`;
	const res = await fetch(url);
	if (res.ok) {
		const resdata = await res.json();
		if (resdata.success) {
			const { changelogs, site } = resdata;
			return { changelogs, site };
		}
		throw new Error(resdata.message);
	}
	throw new Error('internal server error');
};
