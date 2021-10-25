import React from 'react';
import { extractImageMetadataFromFileID } from '../../../lib/file_metadata';
import { CoverMediaType, ICoverMedia } from '../../../lib/types';
import type { IDateProps } from '../../DateLabel';
import Image from '../../Image';
import { CoverMedia } from '../../Renderer';
import type { IStatisticsBarProps } from '../../Statistic/Bar';
import type { ITagBarProps } from '../../Tags/Bar';
import type { ICardDescriptionProps } from '../Description';
import type { ICardReadButtonProps } from '../ReadButton';
import type { ICardTitleProps } from '../Title';

export interface ICardContainerProps {
	title?: React.ReactElement<ICardTitleProps>;
	description?: React.ReactElement<ICardDescriptionProps>;
	statistics?: React.ReactElement<IStatisticsBarProps>;
	date?: React.ReactElement<IDateProps>;
	button?: React.ReactElement<ICardReadButtonProps>;
	tags?: React.ReactElement<ITagBarProps>;
	imageUrl?: string;
	coverMedia?: ICoverMedia;
	alt?: string;
	className?: string;
	onClick?: () => void;
}

const Container = (props: ICardContainerProps) => {
	const {
		title,
		description,
		imageUrl,
		alt,
		className = '',
		statistics,
		date,
		button,
		tags,
		coverMedia,
		onClick,
	} = props;
	const hasCoverMedia = coverMedia && coverMedia.type !== CoverMediaType.None;
	const md = imageUrl ? extractImageMetadataFromFileID(imageUrl!) : undefined;

	return (
		<div className={`Pinpoint Content Card Container wrapper ${className}`} onClick={onClick}>
			{imageUrl && (
				<Image
					className="cover"
					src={imageUrl}
					alt={alt}
					width={md?.size?.width}
					height={md?.size?.height}
					blurhash={md?.blurhash}
				/>
			)}
			{hasCoverMedia && <CoverMedia media={coverMedia} />}
			{!hasCoverMedia && !imageUrl && <div className="empty-cover" />}
			<div className="content">
				{title}
				{date}
				{tags}
				{description}
				<div className="footer">
					{button && <div className="button">{button}</div>}
					{statistics && <div className="statistics">{statistics}</div>}
				</div>
			</div>
		</div>
	);
};

export default Container;
