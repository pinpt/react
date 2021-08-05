import { useCallback, useEffect, useMemo, useState } from 'react';
import algoliasearch from 'algoliasearch';
import { algolia } from '../../config';
import { Entry } from '../types';

const client = algoliasearch(algolia.appId, algolia.apiKey);
const index = client.initIndex('changelog');

const useSearch = (term: string, siteId: string) => {
	const [loading, setLoading] = useState(() => !!term);
	const [results, setResults] = useState<Entry[]>([]);

	const query = useMemo(() => {
		return `site_id:"${siteId}"`;
	}, [siteId]);

	const handleFetchForTerm = useCallback(async () => {
		setLoading(true);
		const res = (await index.search(term, { filters: query })) as any;
		if (res?.hits?.length) {
			setResults(
				res.hits
					.map((hit) => {
						return {
							id: hit.objectID,
							title: hit.title,
							cover_image: hit.coverMedia?.value ?? '',
							publishedAt: hit.createdAt,
							headline: hit.headline,
							tags: hit.tags,
						} as Entry;
					})
					.sort((a, b) => b.publishedAt - a.publishedAt)
			);
		}
		setLoading(false);
	}, [term, query]);

	useEffect(() => {
		handleFetchForTerm();
	}, [handleFetchForTerm]);

	return {
		loading,
		results,
	};
};

export default useSearch;
