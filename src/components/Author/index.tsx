import React from 'react';
import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import Image from '../Image';
import ActionLink from '../Internal/ActionLink';

export interface IAuthorProps {
	className?: string;
	avatarUrl: string;
	name?: string;
	href?: string;
}

const Author = (props: IAuthorProps) => {
	const { className = '', avatarUrl, name = '', href } = props;
	const { size } = extractImageMetadataFromFileID(avatarUrl);

	return (
		<div className={`Pinpoint Author ${className}`}>
			<ActionLink title={`${name} avatar`} href={href}>
				<Image className="avatar" src={avatarUrl} width={size?.width ?? 128} height={size?.height ?? 128} />
				<span className="name">{name}</span>
			</ActionLink>
		</div>
	);
};

export default Author;
