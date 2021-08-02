import { ReactElement } from 'react';
import { ILogoProps } from '../Logo';

export interface ICopyrightProps {
	className?: string;
	text: string;
	logo?: ReactElement<ILogoProps>;
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
