import React, { ReactElement } from 'react';
import { feedbackTitleFromContent } from '../../../lib/data/feedback';
import { configFromSite } from '../../../lib/data/site';
import type { IContent, ISite } from '../../../lib/types';
import type { IFeedbackProps, IFeedbackModalProps } from '../../../lib/types/feedback';
import Feedback from '../../../widgets/Feedback';
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
import { EmailShare, FacebookShare, LinkedInShare, SocialMediaBar, TwitterShare } from '../../SocialMedia';
import { ISocialMediaBarProps } from '../../SocialMedia/SocialMediaBar';
import { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import { IThemeToggleProps } from '../../ThemeToggle';
import Footer from '../Footer';
import Header from '../Header';

export interface IPrebuiltEntryProps {
	className?: string;
	renderContent?: (content: IContent) => ReactElement;
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSidebar?: (content: IContent) => ReactElement<ISidebarProps>;
	renderDate?: (content: IContent) => ReactElement<IDateProps>;
	renderAuthor?: (content: IContent) => ReactElement<IAuthorProps>;
	renderTags?: (content: IContent) => ReactElement<ITagBarProps>;
	renderClap?: (content: IContent) => ReactElement<IClapProps>;
	handleSelectHome?: () => void;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderSocialSharing?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderPagination?: (site: ISite, next?: IContent, previous?: IContent) => void;
	renderFeedback?: (site: ISite) => ReactElement<IFeedbackProps>;
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
	handleAddTagToQuery?: (value: string) => void;
	renderNotificationBannerWidget?: (widget: any) => ReactElement;
	renderNotificationPopupWidget?: (widget: any) => ReactElement;
	renderNoficiationModalWidget?: (widget: any) => ReactElement;
	renderMostRecentPostsWidget?: (widget: any) => ReactElement;
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
		renderFeedback,
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
		handleAddTagToQuery,
		renderMostRecentPostsWidget,
		renderNoficiationModalWidget,
		renderNotificationPopupWidget,
		renderNotificationBannerWidget,
	} = props;

	return (
		<Pinpoint
			siteId={site.id}
			basePath={site.basePath}
			contentId={content.id}
			renderMostRecentPostsWidget={renderMostRecentPostsWidget}
			renderNoficiationModalWidget={renderNoficiationModalWidget}
			renderNotificationPopupWidget={renderNotificationPopupWidget}
			renderNotificationBannerWidget={renderNotificationBannerWidget}
		>
			{(_ready, ref) => (
				<EntryPage
					ref={ref}
					zoomable={zoomable}
					className={`Prebuilt ${className}`}
					coverMedia={content.coverMedia}
					title={content.title}
					renderer={renderContent?.(content) ?? <Document node={content.document} opts={{ zoomable }} />}
					sidebar={
						renderSidebar?.(content) ?? (
							<Sidebar
								date={renderDate?.(content) ?? <DateLabel ts={content.publishedAt} />}
								author={
									renderAuthor?.(content) ?? (
										<Author
											className="Prebuilt"
											avatarUrl={content.authors?.[0]?.avatarUrl ?? ''}
											name={`${content.authors?.[0]?.firstName ?? ''} ${
												content.authors?.[0]?.lastName ?? ''
											}`}
										/>
									)
								}
								tags={
									renderTags?.(content) ?? (
										<Tags.Bar
											className="Prebuilt"
											tags={content.styledTags ?? content.tags ?? []}
											onClick={(tag: string) => handleAddTagToQuery?.(tag)}
										/>
									)
								}
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
										<SocialMediaBar className="sharing">
											<FacebookShare href={content.url} newTab />
											<TwitterShare href={content.url} text={content.headline} newTab />
											<LinkedInShare
												href={content.url}
												title={`${site.name} - ${content.title}`}
												summary={content.headline}
												newTab
											/>
											<EmailShare
												subject={`${site.name} - ${content.title}`}
												body={`${site.name} - ${content.title}\n\n${content.headline}\n\n${content.url}`}
											/>
										</SocialMediaBar>
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
					feedback={
						site.features?.feedback
							? renderFeedback?.(site) ?? (
									<Feedback
										config={configFromSite(site)}
										title={feedbackTitleFromContent(content)}
										pageTitle={content.title}
										contentId={content.id}
										url={content.url}
										pageType={content.type ?? site.type}
									/>
							  )
							: undefined
					}
				/>
			)}
		</Pinpoint>
	);
};

export default Entry;
