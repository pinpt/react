import { useCallback, useEffect, useState } from 'react';
import { fetchContent } from '../data';
import { IContent } from '../types';

const useContent = (slug: string, siteId: string, contentId: string, siteUrl: string) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [content, setContent] = useState<IContent>();
	const fetch = useCallback(async () => {
		try {
			setLoading(true)
			const res = await fetchContent({
				slug,
				siteId,
				siteUrl,
			}, contentId);
			setContent(res.content);
		} catch (ex) {
			setError(ex.message);
		} finally {
			setLoading(false);
		}
	}, [contentId, slug, siteId, siteUrl]);

	useEffect(() => {
		fetch();
	}, [fetch]);

	return {
		loading,
		error,
		content,
	}
};

export default useContent;
