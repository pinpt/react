import { FetchContentOptions, executeAPI } from '../';
import { IPinpointConfig } from '../types';
import { PublishedRoadmapResponse } from '../types/roadmap';

export const fetchRoadmap = async (
	config: Omit<IPinpointConfig, 'pageSize'>,
	options?: FetchContentOptions
): Promise<PublishedRoadmapResponse> => {
	const result = await executeAPI(config, `/roadmap/${config.siteId}`);

	return result;
};
