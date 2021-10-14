import algoliasearch from 'algoliasearch';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import config from '../../../config';
import { getTagColorStyles } from '../../color';
import { CoverMediaType } from '../../types';

import type { IContent, ISite, StyledTag, ICoverMedia, TagMapping } from '../../types';

const { algolia } = config;
const client = algoliasearch(algolia.appId, algolia.apiKey);
const index = client.initIndex(algolia.index);

export const getPlaceholderImageUrl = (media?: ICoverMedia) => {
	if (!media) {
		return '';
	}

	if (media.placeholderImage) {
		return media.placeholderImage;
	}

	switch (media.type) {
		case CoverMediaType.Youtube: {
			return `https://i.ytimg.com/vi/${media.value}/${media.metadata?.poster ?? 'hqdefault'}.jpg`;
		}
		case CoverMediaType.Video: {
			return `${media.value}/thumbnail`;
		}
		case CoverMediaType.Image: {
			return media.value;
		}
		default:
			break;
	}
	return '';
};

const getCoverMediaForHit = (hit: any) => {
	if (hit.coverMedia) {
		return {
			...hit.coverMedia,
			placeholderImage: getPlaceholderImageUrl(hit.coverMedia),
		};
	}

	if (hit.cover_image) {
		return {
			type: CoverMediaType.Image,
			value: hit.cover_image,
			placeholderImage: hit.cover_image,
		};
	}
};

const getSiteTagMappingAndId = (site: string | ISite): [string, TagMapping | undefined] => {
	if (typeof site === 'string') {
		return [site, undefined];
	}
	return [site.id, site.tagMapping];
};

const useSearch = (term: string, tags: string[], site: string | ISite) => {
	const [loading, setLoading] = useState(() => !!term);
	const [results, setResults] = useState<IContent[]>([]);

	const [siteId, tagMapping] = getSiteTagMappingAndId(site);

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
						.map((hit: any) => {
							return {
								id: hit.objectID,
								title: hit.title,
								commit: hit.commit,
								authors: hit.authors,
								coverMedia: getCoverMediaForHit(hit),
								publishedAt: hit.publishedAt,
								headline: hit.headline,
								tags: hit.tags,
								styledTags: hit.tags
									? (hit.tags as string[]).map<StyledTag>((t) => ({
											name: t,
											style: { ...getTagColorStyles(t, undefined, tagMapping) },
									  }))
									: [],
								url: hit.url,
								robots: hit.robots,
							} as IContent;
						})
						.sort((a: IContent, b: IContent) => b.publishedAt - a.publishedAt)
				);
			} else {
				setResults([]);
			}
			setLoading(false);
		}
	}, [term, filters, hash, tagMapping]);

	useEffect(() => {
		handleFetchForTerm();
	}, [handleFetchForTerm, term, tags, filters]);

	return {
		loading,
		results,
	};
};

export default useSearch;
