import { ReactElement } from 'react';
import { ICopyrightProps } from '../Copyright';
import PoweredByPinpoint from '../PoweredByPinpoint';
import { ISocialMediaBarProps } from '../SocialMedia/Bar';
import { ISubscribeProps } from '../Subscribe';
import React from 'react';
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
