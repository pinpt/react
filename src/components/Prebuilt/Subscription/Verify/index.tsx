import React, { ReactElement } from 'react';
import { ISite } from '../../../../lib/types/site';
import { ICopyrightProps } from '../../../Copyright';
import { IFooterProps } from '../../../Footer';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { ILogoProps } from '../../../Logo';
import { ISocialMediaBarProps } from '../../../SocialMedia/SocialMediaBar';
import VerifyComponent, { IVerifyeProps } from '../../../Subscription/Verify';
import { IThemeToggleProps } from '../../../ThemeToggle';
import Footer from '../../Footer';
import Header from '../../Header';

export interface IPrebuiltVerifyProps {
	className?: string;
	site: ISite;
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	handleSelectHome?: () => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderVerify?: (site: ISite) => ReactElement<IVerifyeProps>;
	firstName?: string;
	lastName?: string;
	loading?: boolean;
	verified?: boolean;
}

const Verify = (props: IPrebuiltVerifyProps) => {
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
		renderVerify,
		firstName,
		lastName,
		verified,
		loading,
	} = props;

	return (
		<div className={`Pinpoint Page SubscriptionVerify Prebuilt ${className}`}>
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
				renderVerify?.(site) ?? (
					<VerifyComponent firstName={firstName} lastName={lastName} verified={verified} loading={loading} />
				),
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

export default Verify;
