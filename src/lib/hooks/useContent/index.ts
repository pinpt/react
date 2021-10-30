import { useCallback, useEffect, useState } from 'react';
import { fetchContent } from '../../data';
import { IContent, IPinpointConfig } from '../../types';

const useContent = (config: Omit<IPinpointConfig, 'pageSize'>, contentId: string) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [content, setContent] = useState<IContent>();
	const _fetch = useCallback(async () => {
		try {
			setLoading(true);
			setError('');
			const res = await fetchContent(config, contentId);
			setContent(res.content);
		} catch (ex: any) {
			setError(ex.message);
		} finally {
			setLoading(false);
		}
	}, [contentId, config]);

	useEffect(() => {
		_fetch();
	}, [_fetch]);

	return {
		loading,
		error,
		content,
	};
};

export default useContent;
