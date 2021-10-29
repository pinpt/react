import React from 'react';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../components/Image';

import type { IContent } from '../../lib/types';

type Styles = 'style1' | 'style2';

interface PageProps {
	count: number;
	previewData: {
		siteUrl: string;
		content: IContent[];
	};
	className?: string;
	style?: Styles;
	inlineCSS?: string;
}

const Style1 = ({ content }: { content: IContent }) => {
	return (
		<div className="style1">
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

const Style2 = ({ content }: { content: IContent }) => {
	return (
		<div className="style2">
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
					<div className="link">
						<span>Read More</span>
					</div>
				</a>
			</div>
		</div>
	);
};

const Tile = ({ content, style }: { content: IContent; style: Styles }) => {
	let comp: React.ReactNode;
	switch (style) {
		case 'style1':
			comp = <Style1 content={content} />;
			break;
		case 'style2':
			comp = <Style2 content={content} />;
			break;
		default:
			break;
	}
	return <div className={`Tile ${style}`}>{comp}</div>;
};

const Page = (props: PageProps) => {
	const { previewData, className = '', style = 'style1', inlineCSS } = props;
	return (
		<div className={`Pinpoint Widget MostRecentPosts ${className} ${style}`.trim()}>
			{inlineCSS && <style dangerouslySetInnerHTML={{ __html: inlineCSS }} />}
			{previewData.content.map((content) => (
				<Tile key={content.id ?? content.url} content={content} style={style} />
			))}
		</div>
	);
};

export default Page;
