import React, { ReactElement } from 'react';
import { ISite } from '../../../../lib/types/site';
import { ICopyrightProps } from '../../../Copyright';
import { IFooterProps } from '../../../Footer';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { ILogoProps } from '../../../Logo';
import { ISocialMediaBarProps } from '../../../SocialMedia/SocialMediaBar';
import UnsubscribeComponent from '../../../Subscription/Unsubscribe';
import { IThemeToggleProps } from '../../../ThemeToggle';
import Footer from '../../Footer';
import Header from '../../Header';

export interface IPrebuiltUnsubscribeProps {
	className?: string;
	site: ISite;
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	handleSelectHome?: () => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
}

const Unsubscribe = (props: IPrebuiltUnsubscribeProps) => {
	const {
		className = '',
		renderHeader,
		site,
		handleSelectHome,
		renderLogo,
		renderThemeToggle,
		renderFooter,
		renderCopyright,
		renderSocial,
	} = props;

	return (
		<div className={`Pinpoint Page SubscriptionUnsubscribe Prebuilt ${className}`}>
			{withWrapper(
				renderHeader?.(site) ?? (
					<Header
						site={site}
						handleSelectHome={handleSelectHome}
						renderLogo={renderLogo}
						renderSearch={() => <></>}
						renderSubscribe={() => <></>}
						renderThemeToggle={renderThemeToggle}
					/>
				),
				'header'
			)}
			{withWrapper(<UnsubscribeComponent />, 'unsubscribe')}
			{withWrapper(
				renderFooter?.(site) ?? (
					<Footer
						site={site}
						renderCopyright={renderCopyright}
						renderLogo={renderLogo}
						renderSocial={renderSocial}
						renderSubscribe={() => <></>}
					/>
				),
				'footer'
			)}
		</div>
	);
};

export default Unsubscribe;
