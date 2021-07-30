import { MouseEventHandler } from 'react';

interface IActionLinkProps {
	className?: string;
	href?: string;
	onClick?: MouseEventHandler<HTMLSpanElement>;
	newTab?: boolean;
	children: any;
}

const ActionLink = (props: IActionLinkProps) => {
	const { className = '', href, onClick, newTab, children } = props;

	if (href) {
		return (
			<a
				href={href}
				className={`Pinpoint Internal Link ${className}`}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
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
