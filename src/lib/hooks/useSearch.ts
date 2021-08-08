import algoliasearch from 'algoliasearch';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { algolia } from '../../config';

const client = algoliasearch(algolia.appId, algolia.apiKey);
const index = client.initIndex(algolia.index);

interface SearchResult {
	id: string;
	title: string;
	cover_image: string;
	publishedAt: number;
	headline: string;
	tags: string[];
}

const useSearch = (term: string, tags: string[], siteId: string) => {
	const [loading, setLoading] = useState(() => !!term);
	const [results, setResults] = useState<SearchResult[]>([]);

	const query = useMemo(() => {
		return `site_id:"${siteId}" ${
			(tags && tags.length > 0 && ` AND ${tags.map((t) => `tags:"${t}"`).join(' AND ')}`) || ''
		}`;
	}, [siteId, tags]);

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
						} as SearchResult;
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
