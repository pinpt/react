import { useCallback, useEffect, useMemo, useState } from 'react';
import { executeAPI } from '../../fetch';
import { getRouterAbsolutePath } from '../../router';
import { IPinpointConfig } from '../../types/config';
import { ISite } from '../../types/site';
import { SubscriptionInfo } from '../../types/subscription';

const useSubscriptionList = (subscriptionId: string, site: ISite, config: IPinpointConfig) => {
	const [result, setResult] = useState<SubscriptionInfo>({ subscriptions: [], sites: {} } as SubscriptionInfo);
	const [loading, setLoading] = useState<boolean>(true);

	const query = useCallback(async () => {
		try {
			setLoading(true);
			const result = await executeAPI(
				{ ...config, siteUrl: getRouterAbsolutePath(site, '') },
				`api/subscription/manage/list/${subscriptionId}`
			);
			setResult(result);
		} finally {
			setLoading(false);
		}
	}, [subscriptionId, site]);

	const fileApi = useMemo(() => {
		if (getRouterAbsolutePath(site, '').includes('edge')) {
			return 'https://file.edge.pinpoint.com';
		}
	}, [site]);

	useEffect(() => {
		query();
	}, [query]);

	return {
		result,
		fileApi,
		loading,
	};
};

export default useSubscriptionList;
