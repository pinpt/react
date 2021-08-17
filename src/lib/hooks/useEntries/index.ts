import { useCallback, useEffect, useState } from 'react';
import { AnalyticsResult, fetchAnalytics } from '../../data/site';
import { IPinpointConfig } from '../../types';
import { fetchContentPaginated, FetchContentPaginatedResult } from '../../data/content';

const useEntries = (config: IPinpointConfig, offset?: number) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [res, setRes] = useState<FetchContentPaginatedResult>();
	const [analytics, setAnalytics] = useState<AnalyticsResult>();

	const fetch = useCallback(async () => {
		try {
			setLoading(true);
			setError('');
			const res = await fetchContentPaginated(config, {
				offset,
				limit: config.pageSize,
				before: true,
				after: true,
				site: true,
			});
			setRes(res);

			const analyticsResult = await fetchAnalytics(
				config,
				res.content.map((e) => e.id)
			);
			setAnalytics(analyticsResult);
		} catch (ex) {
			setError(ex.message);
		} finally {
			setLoading(false);
		}
	}, [config, offset]);

	useEffect(() => {
		fetch();
	}, [fetch]);

	return {
		loading,
		error,
		content: res?.content,
		site: res?.site,
		analytics,
	};
};

export default useEntries;
