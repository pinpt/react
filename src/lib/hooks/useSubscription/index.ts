import { useCallback, useEffect, useState } from 'react';
import { executeAPI } from '../../fetch';
import { getRouterAbsolutePath } from '../../router';
import { IPinpointConfig } from '../../types/config';
import { ISite } from '../../types/site';

const useSubscription = (subscriptionId: string, site: ISite, config: IPinpointConfig) => {
	const [subscription, setSubscription] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(false);

	const query = useCallback(
		async (useLoader = true) => {
			try {
				if (useLoader) {
					setLoading(true);
				}
				const result = await executeAPI(
					{ ...config, siteUrl: getRouterAbsolutePath(site, '') },
					`/api/subscription/manage/${subscriptionId}`
				);
				setSubscription(result);
			} catch {
				setSubscription({});
			} finally {
				setLoading(false);
			}
		},
		[site, subscriptionId]
	);

	useEffect(() => {
		query();
	}, [query]);

	const refetch = useCallback(() => {
		query(false);
	}, [query]);

	return {
		subscription,
		loading,
		refetch,
	};
};

export default useSubscription;
