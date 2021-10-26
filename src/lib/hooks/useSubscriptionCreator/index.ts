import { useCallback, useEffect, useMemo, useState } from 'react';
import { executeAPI } from '../../fetch';
import { getRouterAbsolutePath } from '../../router';
import { IPinpointConfig } from '../../types/config';
import { ISite } from '../../types/site';
import { SubscriptionInfo } from '../../types/subscription';

const useSubscriptionCreator = (site: ISite) => {
	const [loading, setLoading] = useState<boolean>(false);
	const query = useCallback(
		async (email: string, config: IPinpointConfig) => {
			try {
				setLoading(true);
				const res = await executeAPI(
					{ ...config, siteUrl: getRouterAbsolutePath(site, '') },
					'api/subscription/manage/create',
					'POST',
					{
						siteId: site.id,
						email,
					}
				);
				return res;
			} finally {
				setLoading(false);
			}
		},
		[site]
	);

	return {
		loading,
		query,
	};
};

export default useSubscriptionCreator;
