import React from 'react';
import { extractImageMetadataFromFileID } from '../../lib/file_metadata';

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
			<a title={`${name} avatar`} href={href}>
				<img className="avatar" src={avatarUrl} alt="" width={size?.width} height={size?.height} />
				<span className="name">{name}</span>
			</a>
		</div>
	);
};

export default Author;
