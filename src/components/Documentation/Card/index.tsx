import ActionLink from '../../Internal/ActionLink';

import React from 'react';
export interface IDocumentationCardProps {
	className?: string;
	title?: string | React.ReactElement;
	description?: string | React.ReactElement;
	cta?: string | React.ReactElement;
	onCtaClick?: () => void;
	onClick?: () => void;
}

const Card = (props: IDocumentationCardProps) => {
	const { className = '', title, description, cta = 'Read', onCtaClick, onClick } = props;

	const component = (
		<>
			{title && <h2 className="title">{title}</h2>}
			{description && <p className="description">{description}</p>}
			{onCtaClick && (
				<div className="cta clickable" onClick={onCtaClick}>
					{cta}
				</div>
			)}
		</>
	);

	return onClick ? (
		<ActionLink className={`Pinpoint Documentation Card Container wrapper ${className}`} onClick={onClick}>
			{component}
		</ActionLink>
	) : (
		<div className={`Pinpoint Documentation Card Container wrapper ${className}`}>{component}</div>
	);
};

export default Card;
