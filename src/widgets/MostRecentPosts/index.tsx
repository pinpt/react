import React from 'react';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../components/Image';
import type { IContent } from '../../lib/types';

interface PageProps {
	count: number;
	previewData: {
		siteUrl: string;
		content: IContent[];
	};
	className?: string;
}

const Tile = ({ content }: { content: IContent }) => {
	return (
		<div className="Tile">
			<div className="covermedia">
				<a href={content.url}>
					{content.coverMedia?.placeholderImage ? (
						<Image src={content.coverMedia.placeholderImage} alt={content.title} className="image" />
					) : (
						<div className="empty">&nbsp;</div>
					)}
				</a>
			</div>
			<div className="body">
				<a href={content.url}>
					<div className="title">{content.title}</div>
					<div className="headline">{content.headline}</div>
					<FontAwesomeIcon icon={faExternalLinkSquareAlt} className="icon" size="xs" />
				</a>
			</div>
		</div>
	);
};

const Page = (props: PageProps) => {
	const { previewData, className = '' } = props;
	return (
		<div className={`Pinpoint Widget MostRecentPosts ${className}`}>
			{previewData.content.map((content) => (
				<Tile key={content.id ?? content.url} content={content} />
			))}
		</div>
	);
};

export default Page;
