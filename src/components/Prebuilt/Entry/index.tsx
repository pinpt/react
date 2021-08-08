import { ReactElement } from 'react';
import Author, { IAuthorProps } from '../../Author';
import Clap, { IClapProps } from '../../Clap';
import Copyright, { ICopyrightProps } from '../../Copyright';
import Footer, { IFooterProps } from '../../Footer';
import Header, { IHeaderProps } from '../../Header';
import Logo, { ILogoProps } from '../../Logo';
import Page from '../../Page';
import { Document } from '../../Renderer';
import Sidebar, { ISidebarProps } from '../../Sidebar';
import Social from '../../Social';
import { ISocialBarProps } from '../../Social/Bar';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import ThemeToggle, { IThemeToggleProps } from '../../ThemeToggle';

import type { IContent, ISite } from '../../../lib/types';

export interface IPrebuiltEntryProps {
	className?: string;
	renderContent?: (content: IContent) => ReactElement;
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSidebar?: (content: IContent) => ReactElement<ISidebarProps>;
	renderAuthor?: (content: IContent) => ReactElement<IAuthorProps>;
	renderTags?: (content: IContent) => ReactElement<ITagBarProps>;
	renderClap?: (content: IContent) => ReactElement<IClapProps>;
	clapCount?: number;
	sessionClapCount?: number;
	onClap?: (contentId: string) => void;
	site: ISite;
	content: IContent;
}

const Entry = (props: IPrebuiltEntryProps) => {
	const {
		className = '',
		content,
		renderContent,
		renderHeader,
		site,
		renderSubscribe,
		renderThemeToggle,
		renderCopyright,
		renderFooter,
		renderLogo,
		renderSocial,
		renderSidebar,
		renderAuthor,
		renderTags,
		renderClap,
		clapCount = 0,
		onClap,
		sessionClapCount = 0,
	} = props;

	return (
		<Page.Entry
			className={`Prebuilt ${className}`}
			coverImage={content.coverMedia?.placeholderImage}
			renderer={renderContent?.(content) ?? <Document node={content.document} />}
			sidebar={
				renderSidebar?.(content) ?? (
					<Sidebar
						author={
							renderAuthor?.(content) ?? (
								<Author
									className="Prebuilt"
									avatarUrl={content.authors?.[0]?.avatarUrl ?? ''}
									name={`${content.authors?.[0]?.firstName} ${content.authors?.[0]?.lastName}`}
								/>
							)
						}
						tags={renderTags?.(content) ?? <Tags.Bar className="Prebuilt" tags={content.tags ?? []} />}
						clap={
							renderClap?.(content) ??
							(onClap ? (
								<Clap
									clapCount={clapCount}
									sessionClapCount={sessionClapCount}
									handleClap={() => onClap(content.id)}
									className="Prebuilt"
								/>
							) : undefined)
						}
					/>
				)
			}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						title={`${site.name}`}
						description={site.theme?.description ?? site.name}
						subscribe={
							renderSubscribe?.(site) ?? (
								<Subscribe className="Prebuilt" href={`${site.url}/subscription/subscribe`} />
							)
						}
						themeToggle={renderThemeToggle?.(site) ?? <ThemeToggle className="Prebuilt" />}
					/>
				)
			}
			footer={
				renderFooter?.(site) ?? (
					<Footer
						className="Prebuilt"
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
									{site.theme?.social?.rss && (
										<Social.RSS className="Prebuilt" href={site.theme.social?.rss} newTab />
									)}
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
											<Logo className="Prebuilt" src={site.logoUrl} href={site.theme?.logoLink} />
										)
									}
								/>
							)
						}
						subscribe={
							renderSubscribe?.(site) ?? (
								<Subscribe className="Prebuilt" href={`${site.url}/subscription/subscribe`} />
							)
						}
					/>
				)
			}
		/>
	);
};

export default Entry;
