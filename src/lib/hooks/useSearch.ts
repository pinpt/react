import algoliasearch from 'algoliasearch';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import config from '../../config';
import { CoverMediaType } from '../../lib/types';

import type { IContent } from '../../lib/types';

const { algolia } = config;
const client = algoliasearch(algolia.appId, algolia.apiKey);
const index = client.initIndex(algolia.index);

const useSearch = (term: string, tags: string[], siteId: string) => {
	const [loading, setLoading] = useState(() => !!term);
	const [results, setResults] = useState<IContent[]>([]);

	const filters = useMemo(() => {
		return `site_id:"${siteId}" ${
			(tags && tags.length > 0 && ` AND ${tags.map((t) => `tags:"${t}"`).join(' AND ')}`) || ''
		}`;
	}, [siteId, tags]);

	const hash = `${filters}${term}${siteId}`;
	const ref = useRef<string>();

	const handleFetchForTerm = useCallback(async () => {
		if (filters) {
			if (ref.current === hash) {
				// don't re-run a search we already have on multiple re-renders
				return;
			}
			ref.current = hash;
			setLoading(true);
			const res = (await index.search(term, { filters })) as any;
			if (res?.hits?.length) {
				setResults(
					res.hits
						.map((hit) => {
							return {
								id: hit.objectID,
								title: hit.title,
								coverMedia:
									hit.coverMedia ?? hit.cover_image
										? {
												type: CoverMediaType.Image,
												value: hit.cover_image,
										  }
										: undefined,
								publishedAt: hit.createdAt,
								headline: hit.headline,
								tags: hit.tags,
							} as IContent;
						})
						.sort((a, b) => b.publishedAt - a.publishedAt)
				);
			}
			setLoading(false);
		}
	}, [term, filters, hash]);

	useEffect(() => {
		handleFetchForTerm();
	}, [handleFetchForTerm, term, tags, filters]);

	return {
		loading,
		results,
	};
};

export default useSearch;
