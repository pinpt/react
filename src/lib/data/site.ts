import type { ISite } from '../types/site';
import type { IPinpointConfig } from '../types/config';
import { executeAPI } from '../fetch';

export const fetchSite = async (config: IPinpointConfig): Promise<ISite> => {
	const { data } = await executeAPI(config, `/site-api/v1/site`);
	return data;
};

export const fetchSiteWithContentCount = async (
	config: IPinpointConfig,
	tag?: string
): Promise<{ site: ISite; count: number }> => {
	const { data: site, count } = await executeAPI(config, `/site-api/v1/site?count=true${tag ? `&tag=${tag}` : ''}`);
	return { site, count };
};

interface IContentAnalytics {
	claps: number;
	pageviews: number;
}

export type AnalyticsResult = Record<string, IContentAnalytics>;

export const fetchAnalytics = async (config: IPinpointConfig, ids?: string[]): Promise<AnalyticsResult> => {
	const params = new URLSearchParams();
	if (ids?.length) {
		params.set('ids', JSON.stringify(ids));
	}
	const qs = params.toString();
	const { data } = await executeAPI(config, `/site-api/v1/site/analytics?${qs}`);
	return data;
};

export const fetchContentAnalytics = async (config: IPinpointConfig, contentId: string): Promise<IContentAnalytics> => {
	const params = new URLSearchParams();
	params.set('ids', JSON.stringify([contentId]));
	const qs = params.toString();
	const { data } = await executeAPI(config, `/site-api/v1/site/analytics?${qs}`);
	return data[contentId] as IContentAnalytics;
};
