import type { Content } from '../types/content';
import type { Site } from '../types/site';
import { URLSearchParams } from 'url';
import { executeAPI } from '../fetch';

interface FetchContentResult {
	content: Content;
	site?: Site;
}

export const fetchContent = async (
	siteId: string,
	contentId: string,
	includeSite = false
): Promise<FetchContentResult> => {
	const { data: content, site } = await executeAPI(`/site-api/v1/content/${siteId}/${contentId}?site=${includeSite}`);
	return { content, site };
};

interface FetchContentPaginatedResult {
	content: Content[];
	before?: Content;
	after?: Content;
	site?: Site;
}

export const fetchContentPaginated = async (
	siteId: string,
	offset = 0,
	limit = 10,
	includeBefore = false,
	includeAfter = false,
	includeSite = false
): Promise<FetchContentPaginatedResult> => {
	const params = new URLSearchParams();
	params.set('offset', String(offset));
	params.set('limit', String(limit));
	params.set('before', String(includeBefore));
	params.set('after', String(includeAfter));
	params.set('site', String(includeSite));
	const qs = params.toString();
	const { data: content, before, after, site } = await executeAPI(`/site-api/v1/content/${siteId}?${qs}`);
	return { content, before, after, site };
};

interface FetchClapResult {
	count: number;
	deviceCount: number;
}

export const fetchClaps = async (siteId: string, contentId: string, unique = true): Promise<FetchClapResult> => {
	const { count, deviceCount } = await executeAPI(`/site-api/v1/content/${siteId}/clap/${contentId}?unique=${unique}`);
	return { count, deviceCount };
};

interface CreateClapResult {
	counts: number;
}

export const createClap = async (siteId: string, contentId: string): Promise<CreateClapResult> => {
	const { counts } = await executeAPI(`/site-api/v1/content/${siteId}/clap/${contentId}`, 'POST');
	return { counts };
};
