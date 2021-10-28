import React, { ReactElement } from 'react';
import { ISite } from '../../../../lib/types/site';
import { SubscriptionInfo } from '../../../../lib/types/subscription';
import { ICopyrightProps } from '../../../Copyright';
import { IFooterProps } from '../../../Footer';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { ILogoProps } from '../../../Logo';
import { ISocialMediaBarProps } from '../../../SocialMedia/SocialMediaBar';
import ManageComponent from '../../../Subscription/Manage';
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
	subscriptions: SubscriptionInfo;
	handleClickUpdate?: (subscriptionId: string) => void;
	handleClickUnsubscribe?: (subscriptionId: string) => void;
	handleClickReSubscribe?: (subscriptionId: string) => void;
	pendingState?: Record<string, boolean>;
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
		pendingState,
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
					pendingState={pendingState}
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
