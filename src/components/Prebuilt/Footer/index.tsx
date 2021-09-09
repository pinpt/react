import React from 'react';
import { ReactElement } from 'react';
import { ISite } from '../../../lib';
import Copyright, { ICopyrightProps } from '../../Copyright';
import BaseFooter from '../../Footer';
import Logo, { ILogoProps } from '../../Logo';
import Social from '../../Social';
import { ISocialBarProps } from '../../Social/Bar';
import Subscribe, { ISubscribeProps } from '../../Subscribe';

export interface IPrebuiltFooterProps {
	className?: string;
	site: ISite;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialBarProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
}

const Footer = (props: IPrebuiltFooterProps) => {
	const { className, site, renderCopyright, renderLogo, renderSocial, renderSubscribe } = props;

	return (
		<BaseFooter
			className={`Prebuilt ${className}`}
			siteId={site?.id}
			social={
				renderSocial?.(site) ?? (
					<Social.Bar className="Prebuilt">
						{site.theme?.social?.facebook && (
							<Social.Facebook className="Prebuilt" href={site.theme.social?.facebook} newTab />
						)}
						{site.theme?.social?.instagram && (
							<Social.Instagram className="Prebuilt" href={site.theme.social?.instagram} newTab />
						)}
						{site.theme?.social?.twitter && (
							<Social.Twitter className="Prebuilt" href={site.theme.social?.twitter} newTab />
						)}
						{site.theme?.social?.github && (
							<Social.Github className="Prebuilt" href={site.theme.social?.github} newTab />
						)}
						{site.theme?.social?.linkedin && (
							<Social.LinkedIn className="Prebuilt" href={site.theme.social?.linkedin} newTab />
						)}
						<Social.RSS className="Prebuilt" href="/rss" newTab />
					</Social.Bar>
				)
			}
			copyright={
				renderCopyright?.(site) ?? (
					<Copyright
						className="Prebuilt"
						text={site.theme?.copyright ?? ''}
						logo={
							renderLogo?.(site) ?? (
								<Logo
									className="Prebuilt"
									src={site.logoUrl}
									href={site.theme?.logoLink ?? site.url}
									title="Footer Logo Home Page"
								/>
							)
						}
					/>
				)
			}
			subscribe={renderSubscribe?.(site) ?? <Subscribe className="Prebuilt" href="/subscription/subscribe" />}
		/>
	);
};

export default Footer;
