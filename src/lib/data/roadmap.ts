import { executeAPI, FetchContentOptions, IPinpointConfig } from 'src';
import { PublishedRoadmapResponse } from '../types/roadmap';

export const fetchRoadmap = async (
	config: Omit<IPinpointConfig, 'pageSize'>,
	options?: FetchContentOptions
): Promise<PublishedRoadmapResponse> => {
	const result = await executeAPI(config, `/roadmap/${config.siteId}`);

	return result;
};
