import { ReactElement } from 'react';
import { ICopyrightProps } from '../Copyright';
import { ISocialBarProps } from '../Social/Bar';
import { ISubscribeProps } from '../Subscribe';

export interface IFooterProps {
	className?: string;
	social?: ReactElement<ISocialBarProps>;
	copyright?: ReactElement<ICopyrightProps>;
	subscribe?: ReactElement<ISubscribeProps>;
}

const Footer = (props: IFooterProps) => {
	const { className = '', social, copyright, subscribe } = props;

	return (
		<div className={`Pinpoint Footer ${className}`}>
			<div className="left">{copyright}</div>
			<div className="right">
				{subscribe}
				{social}
			</div>
		</div>
	);
};

export default Footer;
