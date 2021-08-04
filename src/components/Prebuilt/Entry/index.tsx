import Page from '../../Page';
import { Entry, Site } from '../../../lib';
import { Content } from '../../Renderer';
import Header, { IHeaderProps } from '../../Header';

import { ReactElement } from 'react';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import ThemeToggle, { IThemeToggleProps } from '../../ThemeToggle';
import Footer, { IFooterProps } from '../../Footer';
import Social from '../../Social';
import Copyright, { ICopyrightProps } from '../../Copyright';
import Logo, { ILogoProps } from '../../Logo';
import { ISocialBarProps } from '../../Social/Bar';
import Sidebar, { ISidebarProps } from '../../Sidebar';
import Author, { IAuthorProps } from '../../Author';
import { ITagBarProps } from '../../Tags/Bar';
import Tags from '../../Tags';
import Clap, { IClapProps } from '../../Clap';

export interface IPrebuiltEntryProps {
	className?: string;
	renderContent?: (entry: Entry) => ReactElement;
	renderHeader?: (site: Site) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: Site) => ReactElement<ISubscribeProps>;
	renderThemeToggle?: (site: Site) => ReactElement<IThemeToggleProps>;
	renderFooter?: (site: Site) => ReactElement<IFooterProps>;
	renderSocial?: (site: Site) => ReactElement<ISocialBarProps>;
	renderCopyright?: (site: Site) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: Site) => ReactElement<ILogoProps>;
	renderSidebar?: (entry: Entry) => ReactElement<ISidebarProps>;
	renderAuthor?: (entry: Entry) => ReactElement<IAuthorProps>;
	renderTags?: (entry: Entry) => ReactElement<ITagBarProps>;
	renderClap?: (entry: Entry) => ReactElement<IClapProps>;
	clapCount?: number;
	onClap?: () => void;
	site: Site;
	entry: Entry;
}

const PrebuiltEntry = (props: IPrebuiltEntryProps) => {
	const {
		className = '',
		entry,
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
	} = props;

	return (
		<Page.Entry
			className={`Prebuilt ${className}`}
			coverImage={entry.cover_image}
			renderer={renderContent?.(entry) ?? <Content node={entry.content} />}
			sidebar={
				renderSidebar?.(entry) ?? (
					<Sidebar
						author={
							renderAuthor?.(entry) ?? (
								<Author
									className="Prebuilt"
									avatarUrl={entry.authors?.[0]?.avatarUrl ?? ''}
									name={`${entry.authors?.[0]?.firstName} ${entry.authors?.[0]?.lastName}`}
								/>
							)
						}
						tags={renderTags?.(entry) ?? <Tags.Bar className="Prebuilt" tags={entry.tags ?? []} />}
						clap={
							renderClap?.(entry) ??
							(onClap ? <Clap clapCount={clapCount} handleClap={onClap} className="Prebuilt" /> : undefined)
						}
					/>
				)
			}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						title={`${site.name} Changelog`}
						description={site.theme.description}
						subscribe={
							renderSubscribe?.(site) ?? (
								<Subscribe className="Prebuilt" href={`https://${site.slug}.pinpoint.com/subscribe`} />
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
						social={
							renderSocial?.(site) ?? (
								<Social.Bar className="Prebuilt">
									{site.theme.social?.facebook && (
										<Social.Facebook className="Prebuilt" href={site.theme.social?.facebook} newTab />
									)}
									{site.theme.social?.instagram && (
										<Social.Instagram className="Prebuilt" href={site.theme.social?.instagram} newTab />
									)}
									{site.theme.social?.twitter && (
										<Social.Twitter className="Prebuilt" href={site.theme.social?.twitter} newTab />
									)}
									{site.theme.social?.github && (
										<Social.Github className="Prebuilt" href={site.theme.social?.github} newTab />
									)}
									{site.theme.social?.linkedin && (
										<Social.LinkedIn className="Prebuilt" href={site.theme.social?.linkedin} newTab />
									)}
									{site.theme.social?.rss && (
										<Social.RSS className="Prebuilt" href={site.theme.social?.rss} newTab />
									)}
								</Social.Bar>
							)
						}
						copyright={
							renderCopyright?.(site) ?? (
								<Copyright
									className="Prebuilt"
									text={site.theme.copyright}
									logo={
										renderLogo?.(site) ?? (
											<Logo className="Prebuilt" src={site.logoUrl} href={site.theme.logoLink} />
										)
									}
								/>
							)
						}
						subscribe={
							renderSubscribe?.(site) ?? (
								<Subscribe className="Prebuilt" href={`https://${site.slug}.pinpoint.com/subscribe`} />
							)
						}
					/>
				)
			}
		/>
	);
};

export default PrebuiltEntry;
