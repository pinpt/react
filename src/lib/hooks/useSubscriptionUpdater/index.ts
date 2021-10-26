import { useCallback, useEffect, useMemo, useState } from 'react';
import { executeAPI } from '../../fetch';
import { getRouterAbsolutePath } from '../../router';
import { IPinpointConfig } from '../../types/config';
import { ISite } from '../../types/site';
import { UpdateSubscriptionManagePayload, UpdateSubscriptionManageResponse } from '../../types/subscription';

const useSubscriptionUpdater = (subscriptionId: string, site: ISite, config: IPinpointConfig) => {
	const [loading, setLoading] = useState<boolean>(false);

	const query = useCallback(
		async (payload: UpdateSubscriptionManagePayload): Promise<UpdateSubscriptionManageResponse> => {
			try {
				setLoading(true);
				const result = await executeAPI(
					{ ...config, siteUrl: getRouterAbsolutePath(site, '') },
					`api/subscription/manage/${subscriptionId}`,
					'PUT',
					payload
				);

				return result;
			} finally {
				setLoading(false);
			}
		},
		[site, subscriptionId]
	);

	return {
		query,
		loading,
	};
};

export default useSubscriptionUpdater;
