import React from 'react';
import ActionLink from '../../Internal/ActionLink';

export interface ICardReadButtonProps {
	className?: string;
	href?: string;
	newTab?: boolean;
	onClick?: () => void;
}

const ReadButton = (props: ICardReadButtonProps) => {
	const { className, href, newTab, onClick } = props;

	return (
		<ActionLink
			className={`Pinpoint Content Card Read ${className ?? ''}`}
			onClick={onClick}
			href={href}
			newTab={newTab}
		>
			Read
			<svg
				className="arrow"
				width={16}
				height={16}
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M5 12h14"></path>
				<path d="M12 5l7 7-7 7"></path>
			</svg>
		</ActionLink>
	);
};

export default ReadButton;
