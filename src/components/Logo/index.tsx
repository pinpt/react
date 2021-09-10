import React from 'react';
import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import Image from '../Image';
import ActionLink from '../Internal/ActionLink';

export interface ILogoProps {
	className?: string;
	src?: string;
	href?: string;
	newTab?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	onClick?: () => void;
	title?: string;
}

const Logo = (props: ILogoProps) => {
	const { className = '', src, href, newTab, size = 'sm', onClick, title = 'Logo' } = props;
	const md = src ? extractImageMetadataFromFileID(src) : undefined;

	return (
		<ActionLink
			className={`Pinpoint Logo ${size} ${className}`}
			href={href}
			newTab={newTab}
			onClick={onClick}
			title={title}
		>
			<Image className="image" src={src} width={md?.size?.width} height={md?.size?.height} />
		</ActionLink>
	);
};

export default Logo;
