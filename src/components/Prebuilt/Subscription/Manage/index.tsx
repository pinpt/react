import React, { ReactElement } from 'react';
import { IHeaderProps } from '../../../Header';
import Header from '../../Header';
import Footer from '../../Footer';
import ManageComponent from '../../../Subscription/Manage';
import { ISite } from '../../../../lib/types/site';
import { ILogoProps } from '../../../Logo';
import { IThemeToggleProps } from '../../../ThemeToggle';
import withWrapper from '../../../Internal/withWrapper';
import { IFooterProps } from '../../../Footer';
import { ISocialMediaBarProps } from '../../../SocialMedia/SocialMediaBar';
import { ICopyrightProps } from '../../../Copyright';
import { SubscriptionInfo } from '../../../../lib/types/subscription';

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
	subscriptions: SubscriptionInfo;
	handleClickUpdate?: (subscriptionId: string) => void;
	handleClickUnsubscribe?: (subscriptionId: string) => void;
	handleClickReSubscribe?: (subscriptionId: string) => void;
	fileApi?: string;
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
		subscriptions,
		handleClickReSubscribe,
		handleClickUnsubscribe,
		handleClickUpdate,
		fileApi,
	} = props;

	return (
		<div className={`Pinpoint Page SubscriptionSubscribe Prebuilt ${className}`}>
			{withWrapper(
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
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
				<ManageComponent
					className="Prebuilt"
					subscriptions={subscriptions}
					handleClickReSubscribe={handleClickReSubscribe}
					handleClickUnsubscribe={handleClickUnsubscribe}
					handleClickUpdate={handleClickUpdate}
					fileApi={fileApi}
				/>,
				'manage'
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
