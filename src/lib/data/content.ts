import type { IContent } from '../types/content';
import type { ISite } from '../types/site';
import type { IPinpointConfig } from '../types/config';
import { URLSearchParams } from 'url';
import { executeAPI } from '../fetch';

interface FetchContentResult {
	content: IContent;
	before?: IContent;
	after?: IContent;
	site?: ISite;
}

interface FetchContentOptions {
	site?: true;
	before?: true;
	after?: true;
	projection?: string[];
}

export const fetchContent = async (
	config: IPinpointConfig,
	contentId: string,
	options?: FetchContentOptions
): Promise<FetchContentResult> => {
	const { before: includeBefore = false, after: includeAfter = false, site: includeSite = false, projection = [] } =
		options ?? {};
	const params = new URLSearchParams();
	params.set('before', String(includeBefore));
	params.set('after', String(includeAfter));
	params.set('site', String(includeSite));
	if (projection.length) {
		params.set('projection', projection.join(','));
	}
	const qs = params.toString();
	const { data: content, site, before, after } = await executeAPI(config, `/site-api/v1/content/${contentId}?${qs}`);
	return { content, site, before, after };
};

interface FetchContentPaginatedResult {
	content: IContent[];
	before?: IContent;
	after?: IContent;
	site?: ISite;
}

interface FetchContentPaginationOptions {
	offset?: number;
	limit?: number;
	before?: true;
	after?: true;
	site?: true;
	projection?: string[];
}

export const fetchContentPaginated = async (
	config: IPinpointConfig,
	options?: FetchContentPaginationOptions
): Promise<FetchContentPaginatedResult> => {
	const {
		offset = 0,
		limit = 10,
		before: includeBefore = false,
		after: includeAfter = false,
		site: includeSite = false,
		projection = [],
	} = options ?? {};

	const params = new URLSearchParams();
	params.set('offset', String(offset));
	params.set('limit', String(limit));
	params.set('before', String(includeBefore));
	params.set('after', String(includeAfter));
	params.set('site', String(includeSite));
	if (projection.length) {
		params.set('projection', projection.join(','));
	}
	const qs = params.toString();
	const { data: content, before, after, site } = await executeAPI(config, `/site-api/v1/content?${qs}`);
	return { content, before, after, site };
};

interface FetchClapResult {
	count: number;
	deviceCount: number;
}

export const fetchClaps = async (
	config: IPinpointConfig,
	contentId: string,
	unique = true
): Promise<FetchClapResult> => {
	const { count, deviceCount } = await executeAPI(config, `/site-api/v1/content/clap/${contentId}?unique=${unique}`);
	return { count, deviceCount };
};

interface CreateClapResult {
	count: number;
	sessionCount: number;
	max: boolean;
}

export const createClap = async (config: IPinpointConfig, contentId: string): Promise<CreateClapResult> => {
	const { counts } = await executeAPI(config, `/site-api/v1/content/clap/${contentId}`, 'POST');
	const { count, sessionCount, max } = counts;
	return { count, sessionCount, max };
};
