import { useCallback, useEffect, useState } from 'react';
import { fetchRoadmap } from '../../data';
import { IPinpointConfig } from '../../types';
import { PublishedRoadmapResponse } from '../../types/roadmap';

const useRoadmap = (config: Omit<IPinpointConfig, 'pageSize'>) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [roadmap, setRoadmap] = useState<PublishedRoadmapResponse>();
	const _fetch = useCallback(async () => {
		try {
			setLoading(true);
			setError('');
			const res = await fetchRoadmap(config);
			setRoadmap(res);
		} catch (ex: any) {
			setError(ex.message);
		} finally {
			setLoading(false);
		}
	}, [config]);

	useEffect(() => {
		_fetch();
	}, [_fetch]);

	return {
		loading,
		error,
		roadmap,
	};
};

export default useRoadmap;
