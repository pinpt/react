import React, { MouseEventHandler } from 'react';

export interface IActionLinkProps {
	className?: string;
	href?: string;
	onClick?: MouseEventHandler<HTMLSpanElement>;
	newTab?: boolean;
	children: any;
	title?: string;
	ariaLabel?: string;
}

const ActionLink = (props: IActionLinkProps) => {
	const { className = '', href, onClick, newTab, children, title, ariaLabel = title } = props;

	if (href) {
		return (
			<a
				href={href}
				className={`Pinpoint Internal Link ${className}`}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
				title={title}
				aria-label={ariaLabel}
			>
				{children}
			</a>
		);
	}

	return (
		<span className={`Pinpoint Internal Link ${onClick ? 'clickable' : ''} ${className}`} onClick={onClick}>
			{children}
		</span>
	);
};

export default ActionLink;
