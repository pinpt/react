import React from 'react';
import { ReactElement } from 'react';
import Card from '../../Card';
import { ICardContainerProps } from '../../Card/Container';
import DateLabel, { IDateProps } from '../../DateLabel';
import { ICardDescriptionProps } from '../../Card/Description';
import { ICardReadButtonProps } from '../../Card/ReadButton';
import { ICardTitleProps } from '../../Card/Title';
import { ICopyrightProps } from '../../Copyright';
import Footer from '../Footer';
import Header from '../Header';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILogoProps } from '../../Logo';
import DashboardPage from '../../Page/Dashboard';
import Search from '../../Search';
import { ISearchBarProps } from '../../Search/Bar';
import { IQueryProps } from '../../Search/Query';
import { ISearchResultsProps } from '../../Search/Results';
import { ISocialMediaBarProps } from '../../SocialMedia/SocialMediaBar';
import Statistic from '../../Statistic';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import { IThemeToggleProps } from '../../ThemeToggle';

import type { IContent, ISearchTerm, ISite } from '../../../lib/types';
import Pinpoint from '../../Pinpoint';
export interface IPrebuiltSearchResultsProps {
	className?: string;
	site: ISite;
	entries?: IContent[];
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderSearchResults?: (entries: IContent[]) => ReactElement<ISearchResultsProps>;
	renderCard?: (content: IContent) => ReactElement<ICardContainerProps>;
	renderCardTitle?: (content: IContent) => ReactElement<ICardTitleProps>;
	renderCardDate?: (content: IContent) => ReactElement<IDateProps>;
	renderCardDescription?: (content: IContent) => ReactElement<ICardDescriptionProps>;
	renderCardStatistics?: (content: IContent) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (content: IContent) => ReactElement<ICardReadButtonProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderTags?: (content: IContent) => ReactElement<ITagBarProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderSearchQuery?: (site: ISite) => ReactElement<IQueryProps>;
	searchTerm?: string;
	searchTags?: string[];
	handleSearch?: (value: string) => void;
	handleSelectContent?: (content: IContent) => void;
	handleRemoveFromQuery?: (value: string, clear: boolean) => void;
	handleAddTagToQuery?: (value: string) => void;
	handleSelectHome?: () => void;
	loading?: boolean;
	renderNotificationBannerWidget?: (widget: any) => ReactElement;
	renderNotificationPopupWidget?: (widget: any) => ReactElement;
	renderNoficiationModalWidget?: (widget: any) => ReactElement;
	renderMostRecentPostsWidget?: (widget: any) => ReactElement;
}

const SearchResults = (props: IPrebuiltSearchResultsProps) => {
	const {
		site,
		className = '',
		renderHeader,
		renderSubscribe,
		renderSearchResults,
		entries = [],
		renderCard,
		renderCardTitle,
		renderCardDate,
		renderCardDescription,
		renderCardStatistics,
		renderCardButton,
		renderFooter,
		renderSocial,
		renderCopyright,
		renderLogo,
		renderTags,
		renderThemeToggle,
		renderSearch,
		renderSearchQuery,
		searchTerm = '',
		searchTags = [],
		handleSearch,
		handleSelectContent,
		handleRemoveFromQuery,
		handleAddTagToQuery,
		handleSelectHome,
		loading,
		renderMostRecentPostsWidget,
		renderNoficiationModalWidget,
		renderNotificationPopupWidget,
		renderNotificationBannerWidget,
	} = props;
	return (
		<Pinpoint
			siteId={site.id}
			basePath={site.basePath}
			contentId=""
			renderMostRecentPostsWidget={renderMostRecentPostsWidget}
			renderNoficiationModalWidget={renderNoficiationModalWidget}
			renderNotificationPopupWidget={renderNotificationPopupWidget}
			renderNotificationBannerWidget={renderNotificationBannerWidget}
		>
			{(_ready, ref) => (
				<DashboardPage
					className={`Prebuilt ${className}`}
					loading={loading}
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
					searchQuery={
						renderSearchQuery?.(site) ?? (
							<Search.Query
								className="Prebuilt"
								terms={[
									...searchTags.map<ISearchTerm>((t) => {
										return {
											type: 'tag',
											value: t,
										};
									}),
									...(searchTerm
										? [
												{
													type: 'text',
													value: searchTerm,
												} as ISearchTerm,
										  ]
										: []),
								]}
								onRemoveTerm={handleRemoveFromQuery}
								tagMapping={site.tagMapping}
							/>
						)
					}
					searchResults={
						renderSearchResults?.(entries) ?? (
							<Search.Results className="Prebuilt" clearQuery={() => handleRemoveFromQuery?.('', true)}>
								{entries.map((content) => {
									return (
										renderCard?.(content) ?? (
											<Card.Container
												key={content.id}
												className="Prebuilt"
												imageUrl={content.coverMedia?.placeholderImage}
												onClick={() => handleSelectContent?.(content)}
												title={
													renderCardTitle?.(content) ?? (
														<Card.Title className="Prebuilt" title={content.title} />
													)
												}
												date={
													renderCardDate?.(content) ?? (
														<DateLabel className="Prebuilt" ts={content.publishedAt} />
													)
												}
												description={
													renderCardDescription?.(content) ?? (
														<Card.Description className="Prebuilt" description={content.headline} />
													)
												}
												statistics={
													renderCardStatistics?.(content) ?? (
														<Statistic.Bar className="Prebuilt" claps={0} views={0} />
													)
												}
												button={
													renderCardButton?.(content) ?? (
														<Card.ReadButton
															onClick={() => handleSelectContent?.(content)}
															className="Prebuilt"
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
											/>
										)
									);
								})}
							</Search.Results>
						)
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

export default SearchResults;
