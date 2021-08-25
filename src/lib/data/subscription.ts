import type { IPinpointConfig } from '../types/config';
import { executeAPI } from '../fetch';

export const subscribe = async (config: IPinpointConfig, email: string): Promise<void> => {
	await executeAPI(
		config,
		`/site-api/v1/site/subscribe`,
		'POST',
		{
			email,
		},
		true
	);
};
