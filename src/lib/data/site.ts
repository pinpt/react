import type { ISite } from '../types/site';
import type { IPinpointConfig } from '../types/config';
import { executeAPI } from '../fetch';

export const fetchSite = async (config: IPinpointConfig): Promise<ISite> => {
	const { site } = await executeAPI(config, `/site-api/v1/site`);
	return site;
};

interface IContentAnalytics {
	claps: number;
	pageviews: number;
}

type AnalyticsResult = Record<string, IContentAnalytics>;

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
