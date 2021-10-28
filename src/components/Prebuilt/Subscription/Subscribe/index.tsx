import React, { ReactElement } from 'react';
import { ISite } from '../../../../lib/types/site';
import { ICopyrightProps } from '../../../Copyright';
import { IFooterProps } from '../../../Footer';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { ILogoProps } from '../../../Logo';
import { ISocialMediaBarProps } from '../../../SocialMedia/SocialMediaBar';
import SubscribeComponent from '../../../Subscription/Subscribe';
import { IThemeToggleProps } from '../../../ThemeToggle';
import Footer from '../../Footer';
import Header from '../../Header';

export interface IPrebuiltSubscribeProps {
	className?: string;
	site: ISite;
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	handleSelectHome?: () => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	handleSubmit?: (email: string) => Promise<any>;
	contentClassName?: string;
	pending?: boolean;
}

const Subscribe = (props: IPrebuiltSubscribeProps) => {
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
		handleSubmit,
		contentClassName,
		pending,
	} = props;

	return (
		<div className={`Pinpoint Page SubscriptionSubscribe Prebuilt ${className}`}>
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
			{withWrapper(
				<SubscribeComponent
					name={site.name}
					handleSubmit={handleSubmit}
					className={`Prebuilt ${contentClassName}`}
					pending={pending}
				/>,
				'subscribe'
			)}
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

export default Subscribe;
