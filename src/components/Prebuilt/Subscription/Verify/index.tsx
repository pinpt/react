import { ReactElement } from 'react';
import { IHeaderProps } from '../../../Header';
import Header from '../../Header';
import Footer from '../../Footer';
import VerifyComponent from '../../../Subscription/Verify';
import { ISite } from '../../../../lib/types/site';
import { ILogoProps } from '../../../Logo';
import { IThemeToggleProps } from '../../../ThemeToggle';
import withWrapper from '../../../Internal/withWrapper';
import { IFooterProps } from '../../../Footer';
import { ISocialMediaBarProps } from '../../../SocialMedia/SocialMediaBar';
import { ICopyrightProps } from '../../../Copyright';

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
			{withWrapper(<VerifyComponent />, 'subscribe')}
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
