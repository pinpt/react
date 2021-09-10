import type { ISite, IContent } from '../../../lib/types';
import React from 'react';
import { extractImageMetadataFromFileID } from '../../../lib/file_metadata';
import { getTwitterProfileFromURL } from '../../../lib/string';

export interface ISEOProps {
	site: ISite;
	content?: IContent;
}

const SiteSEO = ({ site }: { site: ISite }) => {
	const title = site.theme?.description ? `${site.theme.description} - ${site.name}` : site.name;
	const description = site.theme?.description ?? site.name;
	return (
		<>
			<title>{title}</title>
			<meta name="type" property="og:type" content="website" />
			<meta name="title" property="og:title" content={title} />
			<meta name="twitter:title" content={title} />
			<meta name="description" property="og:description" content={description} />
			<meta name="twitter:description" content={description} />
		</>
	);
};

const formatAuthors = (content: IContent): string => {
	const authors =
		content.authors?.filter((author) => !!author).map((author) => `${author.firstName} ${author.lastName}`) ?? [];
	return authors.join(', ');
};

const getCoverImage = (content: IContent): string => {
	if (content.coverMedia?.placeholderImage) {
		const { size } = extractImageMetadataFromFileID(content.coverMedia.placeholderImage);
		if (size?.width !== 1200 && size?.height !== 628) {
			const u = new URL(content.coverMedia.placeholderImage);
			u.searchParams.set('rw', '1200');
			u.searchParams.set('rh', '628');
			return u.toString();
		}
		return content.coverMedia.placeholderImage;
	}
	return '';
};

const ContentSEO = ({ site, content }: { site: ISite; content: IContent }) => {
	const title = content.title;
	const description = content.headline;
	const author = formatAuthors(content);
	const date = new Date(content.publishedAt).toISOString();
	const coverImage = getCoverImage(content);
	return (
		<>
			<title>
				{title} - {site.name}
			</title>
			{coverImage && (
				<>
					<meta name="image" property="og:image" content={coverImage} />
					<meta name="twitter:image" content={coverImage} />
					<meta name="twitter:image:alt" content={title} />
				</>
			)}
			<meta name="type" property="og:type" content="article" />
			<meta property="author" content={author} />
			<meta name="author" property="og:author" content={author} />
			<meta property="article:published_time" content={date} />
			<meta name="title" property="og:title" content={title} />
			<meta name="twitter:title" content={title} />
			<meta name="description" property="og:description" content={description} />
			<meta name="twitter:description" content={description} />
			<link
				rel="alternate"
				type="application/rss+xml"
				title={`RSS Feed for ${site.theme?.title ?? site.name}`}
				href={`${site.url}/rss`}
			/>
		</>
	);
};

const SEO = (props: ISEOProps) => {
	const { site, content } = props;
	const contentSEO = content ? <ContentSEO site={site} content={content} /> : null;
	const siteSEO = !content ? <SiteSEO site={site} /> : null;
	const url = content ? content.url : site.url;
	const twitterHandle = getTwitterProfileFromURL(site.theme?.social?.twitter);
	return (
		<>
			{contentSEO}
			{siteSEO}
			<link rel="icon" href={site.logoUrl} />
			<link rel="shortcut icon" href={site.logoUrl} />
			<link rel="alternate" type="application/rss+xml" title={`${site.name} RSS Feed`} href="/rss" />
			<meta property="og:site_name" content={site.name} />
			<meta name="robots" content="index, follow" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:url" content={url} />
			<meta property="twitter:url" content={url} />
			<link rel="canonical" href={url} />
			{twitterHandle && (
				<>
					<meta name="twitter:creator" content={twitterHandle} />
					<meta name="twitter:site" content={twitterHandle} />
				</>
			)}
		</>
	);
};

export default SEO;
