import { ReactElement } from 'react';
import React from 'react';
import { ICopyrightProps } from '../Copyright';
import PoweredByPinpoint from '../PoweredByPinpoint';
import { ISocialMediaBarProps } from '../SocialMedia/SocialMediaBar';
import { ISubscribeProps } from '../Subscribe';

export interface IFooterProps {
	className?: string;
	siteId?: string;
	social?: ReactElement<ISocialMediaBarProps>;
	copyright?: ReactElement<ICopyrightProps>;
	subscribe?: ReactElement<ISubscribeProps>;
}

const Footer = (props: IFooterProps) => {
	const { className = '', siteId = '', social, copyright, subscribe } = props;

	return (
		<div className={`Pinpoint Footer ${className}`}>
			<div className="content">
				<div className="left">{copyright}</div>
				<div className="right">
					{subscribe}
					{social}
				</div>
			</div>
			<div className="powered">
				<PoweredByPinpoint siteId={siteId} />
			</div>
		</div>
	);
};

export default Footer;
