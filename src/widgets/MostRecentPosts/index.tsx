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
}

const Tile = ({ content }: { content: IContent }) => {
	return (
		<div className="relative border rounded-lg Tile">
			<div className="overflow-hidden border-b border-gray-100">
				<a href={content.url}>
					{content.coverMedia?.placeholderImage ? (
						<Image
							src={content.coverMedia.placeholderImage}
							alt={content.title}
							className="object-cover w-full h-40 transition-all duration-300 ease-out rounded-t-lg"
						/>
					) : (
						<div className="w-full h-40 bg-gray-50">&nbsp;</div>
					)}
				</a>
			</div>
			<div className="mt-2 py-1 px-2">
				<a href={content.url}>
					<div className="font-semibold">{content.title}</div>
					<div className="mt-1 text-sm text-gray-500 mr-2">{content.headline}</div>
					<FontAwesomeIcon
						icon={faExternalLinkSquareAlt}
						className="text-gray-300 hover:text-gray-900 absolute right-2 bottom-2"
						size="xs"
					/>
				</a>
			</div>
		</div>
	);
};

const Page = (props: PageProps) => {
	const { previewData } = props;
	return (
		<div className="Widget MostRecentPosts grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{previewData.content.map((content) => (
				<Tile key={content.id ?? content.url} content={content} />
			))}
		</div>
	);
};

export default Page;
