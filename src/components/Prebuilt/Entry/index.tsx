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
import Search from '../../Search';

import type { IContent, ISite } from '../../../lib/types';
import { ISearchBarProps } from '../../Search/Bar';

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
	handleSelectHome?: () => void;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderSocialSharing?: (site: ISite) => ReactElement<ISocialBarProps>;
	clapCount?: number;
	sessionClapCount?: number;
	onClap?: (content: IContent) => void;
	site: ISite;
	content: IContent;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
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
		handleSelectHome,
		searchTerm,
		handleSearch,
		renderSearch,
		renderSocialSharing,
	} = props;

	return (
		<Page.Entry
			className={`Prebuilt ${className}`}
			coverMedia={content.coverMedia}
			title={content.title}
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
									handleClap={() => onClap(content)}
									className="Prebuilt"
								/>
							) : undefined)
						}
						sharing={
							renderSocialSharing?.(site) ?? (
								<Social.Bar>
									<Social.Facebook
										sharing
										href={`https://facebook.com/sharer/sharer.php?u=${site.url}/entry/${content.id}`}
										newTab
									/>
									<Social.Twitter
										sharing
										href={`https://twitter.com/intent/tweet/?text=${content.headline}&url=${site.url}/entry/${content.id}`}
										newTab
									/>
									<Social.LinkedIn
										sharing
										href={`https://www.linkedin.com/shareArticle?mini=true&url=${site.url}/entry/${content.id}&title=${site.name} - ${content.title}&summary=${content.headline}`}
										newTab
									/>
									<Social.Email
										sharing
										href={`mailto:?subject=${site.name} - ${content.title}&body=${site.name} - ${content.title}%0D%0A${content.headline}%0D%0A${site.url}/entry/${content.id}`}
									/>
								</Social.Bar>
							)
						}
					/>
				)
			}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						title={site.theme?.title ?? site.name}
						onClick={() => handleSelectHome?.()}
						description={site.theme?.description ?? site.name}
						subscribe={
							renderSubscribe?.(site) ?? <Subscribe className="Prebuilt" href="/subscription/subscribe" />
						}
						themeToggle={renderThemeToggle?.(site) ?? <ThemeToggle className="Prebuilt" />}
						search={
							renderSearch?.(site) ?? (
								<Search.Bar defaultValue={searchTerm} onSubmit={handleSearch} className="Prebuilt" />
							)
						}
						logo={
							renderLogo?.(site) ?? (
								<Logo
									className="Prebuilt"
									title="Header Logo Content Page"
									src={site.logoUrl}
									href={site.theme?.logoLink ?? site.url}
								/>
							)
						}
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
										<Social.RSS className="Prebuilt" href={site.theme.social?.rss ?? '/rss'} newTab />
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
											<Logo
												className="Prebuilt"
												src={site.logoUrl}
												href={site.theme?.logoLink ?? site.url}
												title="Footer Logo Content Page"
											/>
										)
									}
								/>
							)
						}
						subscribe={
							renderSubscribe?.(site) ?? <Subscribe className="Prebuilt" href="/subscription/subscribe" />
						}
					/>
				)
			}
		/>
	);
};

export default Entry;
