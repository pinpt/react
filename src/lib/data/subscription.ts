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

export const validateSubscription = async (config: IPinpointConfig, email: string): Promise<boolean> => {
	const res = await executeAPI(config, `/subscription/validate/${encodeURIComponent(email)}`, 'GET');

	return res;
};

export const listSubscriptions = async (config: IPinpointConfig, subscriptionId: string) => {
	const res = await executeAPI(config, `/subscription/manage/list/${subscriptionId}`, 'GET');

	return res;
};
