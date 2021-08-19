import { ReactElement } from 'react';
import { IFooterProps } from '../../Footer';
import { ILogoProps } from '../../Logo';
import { ISite } from '../../../lib';
import { ISubscribeProps } from '../../Subscribe';
import { ICopyrightProps } from 'src/components/Copyright';
import { ISocialBarProps } from 'src/components/Social/Bar';

export interface IPrebuiltErrorProps {
	handleLinkClick?: () => void;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialBarProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	site: ISite;
}
