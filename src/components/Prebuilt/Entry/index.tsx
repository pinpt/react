import React, { ReactElement } from 'react';
import Author, { IAuthorProps } from '../../Author';
import Clap, { IClapProps } from '../../Clap';
import { ICopyrightProps } from '../../Copyright';
import DateLabel, { IDateProps } from '../../DateLabel';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILogoProps } from '../../Logo';
import EntryPage from '../../Page/Entry';
import Pagination from '../../Pagination';
import Pinpoint from '../../Pinpoint';
import { Document } from '../../Renderer';
import { ISearchBarProps } from '../../Search/Bar';
import Sidebar, { ISidebarProps } from '../../Sidebar';
import Social from '../../Social';
import { ISocialBarProps } from '../../Social/Bar';
import { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import { IThemeToggleProps } from '../../ThemeToggle';
import Footer from '../Footer';
import Header from '../Header';

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
	renderDate?: (content: IContent) => ReactElement<IDateProps>;
	renderAuthor?: (content: IContent) => ReactElement<IAuthorProps>;
	renderTags?: (content: IContent) => ReactElement<ITagBarProps>;
	renderClap?: (content: IContent) => ReactElement<IClapProps>;
	handleSelectHome?: () => void;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderSocialSharing?: (site: ISite) => ReactElement<ISocialBarProps>;
	renderPagination?: (site: ISite, next?: IContent, previous?: IContent) => void;
	clapCount?: number;
	sessionClapCount?: number;
	onClap?: (content: IContent) => void;
	site: ISite;
	content: IContent;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
	nextEntry?: IContent;
	previousEntry?: IContent;
	handleSelectEntry?: (entry: IContent) => void;
	zoomable?: boolean;
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
		renderDate,
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
		renderPagination,
		nextEntry,
		previousEntry,
		handleSelectEntry,
		zoomable,
	} = props;

	return (
		<Pinpoint siteId={site.id} basePath={site.basePath} contentId={content.id}>
			{(_ready, ref) => (
				<EntryPage
					ref={ref}
					zoomable={zoomable}
					className={`Prebuilt ${className}`}
					coverMedia={content.coverMedia}
					title={content.title}
					renderer={renderContent?.(content) ?? <Document node={content.document} />}
					sidebar={
						renderSidebar?.(content) ?? (
							<Sidebar
								date={renderDate?.(content) ?? <DateLabel ts={content.publishedAt} />}
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
										<Social.Bar className="sharing">
											<Social.Facebook
												sharing
												href={`https://facebook.com/sharer/sharer.php?u=${content.url}`}
												newTab
											/>
											<Social.Twitter
												sharing
												href={`https://twitter.com/intent/tweet/?text=${content.headline}&url=${content.url}`}
												newTab
											/>
											<Social.LinkedIn
												sharing
												href={`https://www.linkedin.com/shareArticle?mini=true&url=${content.url}&title=${site.name} - ${content.title}&summary=${content.headline}`}
												newTab
											/>
											<Social.Email
												sharing
												href={`mailto:?subject=${site.name} - ${content.title}&body=${site.name} - ${content.title}%0D%0A${content.headline}%0D%0A${content.url}`}
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
								site={site}
								searchTerm={searchTerm}
								handleSearch={handleSearch}
								handleSelectHome={handleSelectHome}
								renderLogo={renderLogo}
								renderSearch={renderSearch}
								renderSubscribe={renderSubscribe}
								renderThemeToggle={renderThemeToggle}
							/>
						)
					}
					pagination={
						renderPagination?.(site, nextEntry, previousEntry) ??
						(nextEntry || previousEntry ? (
							<Pagination
								goBackText={<Pagination.GoBackWithArrow text={previousEntry?.title} />}
								goBack={previousEntry && handleSelectEntry ? () => handleSelectEntry(previousEntry) : undefined}
								goForwardText={<Pagination.GoForwardWithArrow text={nextEntry?.title} />}
								goForward={nextEntry && handleSelectEntry ? () => handleSelectEntry(nextEntry) : undefined}
							/>
						) : undefined)
					}
					footer={
						renderFooter?.(site) ?? (
							<Footer
								site={site}
								renderCopyright={renderCopyright}
								renderLogo={renderLogo}
								renderSocial={renderSocial}
								renderSubscribe={renderSubscribe}
							/>
						)
					}
				/>
			)}
		</Pinpoint>
	);
};

export default Entry;
