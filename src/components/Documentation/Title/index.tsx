import React from 'react';
import { ISite } from '../../../lib';
import Logo from '../../Logo';

export interface IDocoumentationTitleProps {
	className?: string;
	site?: ISite;
	text?: string;
	onClick?: () => void;
}

const Title = (props: IDocoumentationTitleProps) => {
	const { className = '', site, text, onClick } = props;
	return (
		<div className={`Pinpoint Documentation Title ${onClick ? 'clickable' : ''} ${className}`} onClick={onClick}>
			{site && <Logo src={site.logoUrl} />}
			<div className="text">{text ? text : site?.name}</div>
		</div>
	);
};

export default Title;
