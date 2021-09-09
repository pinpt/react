import ActionLink from '../Internal/ActionLink';
import React from 'react';
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

	return (
		<ActionLink
			className={`Pinpoint Logo ${size} ${className}`}
			href={href}
			newTab={newTab}
			onClick={onClick}
			title={title}
		>
			<img className="image" src={src} />
		</ActionLink>
	);
};

export default Logo;
