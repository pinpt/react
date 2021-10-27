import { ReactElement } from 'react';
import { ISite } from '../../../lib';
import { ICopyrightProps } from '../../Copyright';
import { IFooterProps } from '../../Footer';
import { ILogoProps } from '../../Logo';
import { ISocialMediaBarProps } from '../../SocialMedia/SocialMediaBar';
import { ISubscribeProps } from '../../Subscribe';

export interface IPrebuiltErrorProps {
	handleLinkClick?: () => void;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	site: ISite;
}
