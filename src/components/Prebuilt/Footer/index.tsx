import React, { ReactElement } from 'react';
import { getSiteRSSURL, ISite } from '../../../lib';
import { getRouterRelativePath } from '../../../lib/router';
import Copyright, { ICopyrightProps } from '../../Copyright';
import BaseFooter from '../../Footer';
import Logo, { ILogoProps } from '../../Logo';
import {
	FacebookLink, GithubLink, InstagramLink, LinkedInLink, RSSLink, SocialMediaBar, TwitterLink
} from '../../SocialMedia';
import { ISocialMediaBarProps } from '../../SocialMedia/SocialMediaBar';
import Subscribe, { ISubscribeProps } from '../../Subscribe';

export interface IPrebuiltFooterProps {
	className?: string;
	site: ISite;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderRoadmap?: (site: ISite) => ReactElement;
}

const Footer = (props: IPrebuiltFooterProps) => {
	const { className, site, renderCopyright, renderLogo, renderSocial, renderSubscribe, renderRoadmap } = props;

	return (
		<BaseFooter
			className={`Prebuilt ${className}`}
			siteId={site?.id}
			roadmap={
				renderRoadmap?.(site) ?? site.features.roadmap ? (
					<a href={getRouterRelativePath(site, '/roadmap')}>View our Roadmap</a>
				) : (
					<></>
				)
			}
			social={
				renderSocial?.(site) ?? (
					<SocialMediaBar className="Prebuilt">
						{site.theme?.social?.facebook && (
							<FacebookLink className="Prebuilt" href={site.theme.social?.facebook} newTab />
						)}
						{site.theme?.social?.instagram && (
							<InstagramLink className="Prebuilt" href={site.theme.social?.instagram} newTab />
						)}
						{site.theme?.social?.twitter && (
							<TwitterLink className="Prebuilt" href={site.theme.social?.twitter} newTab />
						)}
						{site.theme?.social?.github && (
							<GithubLink className="Prebuilt" href={site.theme.social?.github} newTab />
						)}
						{site.theme?.social?.linkedin && (
							<LinkedInLink className="Prebuilt" href={site.theme.social?.linkedin} newTab />
						)}
						<RSSLink className="Prebuilt" href={getSiteRSSURL(site)} newTab />
					</SocialMediaBar>
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
			subscribe={
				renderSubscribe?.(site) ?? (
					<Subscribe className="Prebuilt" href={getRouterRelativePath(site, '/subscribe')} />
				)
			}
		/>
	);
};

export default Footer;
