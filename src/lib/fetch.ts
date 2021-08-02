import fetch from 'isomorphic-unfetch';
import { getAPIUrl } from './env';

import type { Entry, Site } from './types';

const defaultUrl = getAPIUrl();

interface FetchOptions {
	apiUrl?: string;
}

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
