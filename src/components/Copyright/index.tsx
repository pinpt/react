import React, { ReactElement } from 'react';
import { IActionLinkProps } from '../Internal/ActionLink';
import { ILogoProps } from '../Logo';

export interface ICopyrightProps {
	className?: string;
	text: string;
	logo?: ReactElement<ILogoProps | IActionLinkProps>;
}

const Copyright = (props: ICopyrightProps) => {
	const { className = '', text, logo } = props;
	return (
		<div className={`Pinpoint Copyright ${className}`}>
			{logo}
			<span className="text">{text}</span>
		</div>
	);
};

export default Copyright;
