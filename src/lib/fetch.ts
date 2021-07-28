import fetch from 'isomorphic-unfetch';
import { getAPIUrl } from './env';

import type { Content } from './types';

const defaultUrl = getAPIUrl();

interface FetchOptions {
	apiUrl?: string;
}

export const fetchContent = async (id: string, options?: FetchOptions): Promise<Content> => {
	const { apiUrl = defaultUrl } = options || {};
	const url = `${apiUrl}/changelog/${id}/public/metadata`;
	const res = await fetch(url);
	if (res.ok) {
		const resdata = await res.json();
		if (resdata.success) {
			const { metadata } = resdata;
			return metadata as Content;
		}
		throw new Error(resdata.message);
	}
	throw new Error('internal server error');
};
