import type { Site } from '../types/site';
import { executeAPI } from '../fetch';

export const fetchSite = async (siteId: string): Promise<Site> => {
	const { site } = await executeAPI(`/site-api/v1/site/${siteId}`);
	return site;
};

type AnalyticsResult = Record<string, { claps: number; pageviews: number }>;

export const fetchAnalytics = async (siteId: string): Promise<AnalyticsResult> => {
	const { data } = await executeAPI(`/site-api/v1/site/${siteId}/analytics`);
	return data;
};
