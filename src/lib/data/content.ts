import type { IContent } from '../types/content';
import type { ISite } from '../types/site';
import type { IPinpointConfig } from '../types/config';
import { executeAPI } from '../fetch';
import { getQueryString } from '../string';

export interface FetchContentResult {
	content: IContent;
	before?: IContent;
	after?: IContent;
	site?: ISite;
}

export interface FetchContentOptions {
	site?: true;
	before?: true;
	after?: true;
	projection?: string[];
	commit?: string; // fetch a specific commit
}

export const fetchContent = async (
	config: Omit<IPinpointConfig, 'pageSize'>,
	contentId: string,
	options?: FetchContentOptions
): Promise<FetchContentResult> => {
	const { before: includeBefore = false, after: includeAfter = false, site: includeSite = false, projection = [] } =
		options ?? {};
	const params = {} as Record<string, string>;
	params.before = String(includeBefore);
	params.after = String(includeAfter);
	params.site = String(includeSite);
	if (projection.length) {
		params.projection = projection.join(',');
	}
	const qs = getQueryString(params);
	const commit = options?.commit ? `/${options.commit}` : '';
	const { data: content, site, before, after } = await executeAPI(
		config,
		`/site-api/v1/content/${contentId}${commit}?${qs}`
	);
	return { content, site, before, after };
};

export interface FetchContentPaginatedResult {
	content: IContent[];
	before?: IContent;
	after?: IContent;
	site?: ISite;
}

export interface FetchContentPaginationOptions {
	tag?: string;
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
		tag,
		offset = 0,
		limit = 10,
		before: includeBefore = false,
		after: includeAfter = false,
		site: includeSite = false,
		projection = [],
	} = options ?? {};

	const params = {} as Record<string, string>;
	params.offset = String(offset);
	params.limit = String(limit);
	params.before = String(includeBefore);
	params.after = String(includeAfter);
	params.site = String(includeSite);
	if (tag) {
		params.tag = tag;
	}
	if (projection.length) {
		params.projection = projection.join(',');
	}
	const qs = getQueryString(params);
	const { data: content, before, after, site } = await executeAPI(config, `/site-api/v1/content?${qs}`);
	return { content, before, after, site };
};

export interface FetchClapResult {
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
