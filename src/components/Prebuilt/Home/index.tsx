import React, { ReactElement } from 'react';
import { fetchAnalytics, splitEntries } from '../../../lib';
import type { Analytics, IContent, ISite } from '../../../lib/types';
import Card from '../../Card';
import { ICardContainerProps } from '../../Card/Container';
import { ICardDescriptionProps } from '../../Card/Description';
import { ICardReadButtonProps } from '../../Card/ReadButton';
import { ICardTitleProps } from '../../Card/Title';
import { ICopyrightProps } from '../../Copyright';
import DateLabel, { IDateProps } from '../../DateLabel';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import Latest, { ILatestProps } from '../../Latest';
import { ILogoProps } from '../../Logo';
import DashboardPage from '../../Page/Dashboard';
import Pagination, { IPaginationProps } from '../../Pagination';
import Pinpoint from '../../Pinpoint';
import Recent, { IRecentProps } from '../../Recent';
import { ISearchBarProps } from '../../Search/Bar';
import { ISocialMediaBarProps } from '../../SocialMedia/SocialMediaBar';
import Statistic from '../../Statistic';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import { IThemeToggleProps } from '../../ThemeToggle';
import Footer from '../Footer';
import Header from '../Header';

export interface IPrebuiltHomeProps {
	className?: string;
	site: ISite;
	entries?: IContent[];
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderLatest?: (entries: IContent[]) => ReactElement<ILatestProps>;
	renderRecent?: (entries: IContent[]) => ReactElement<IRecentProps>;
	renderCard?: (Content: IContent) => ReactElement<ICardContainerProps>;
	renderCardTitle?: (Content: IContent) => ReactElement<ICardTitleProps>;
	renderCardDate?: (Content: IContent) => ReactElement<IDateProps>;
	renderCardDescription?: (Content: IContent) => ReactElement<ICardDescriptionProps>;
	renderCardStatistics?: (
		Content: IContent,
		analytics?: { claps: number; pageviews: number }
	) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (Content: IContent) => ReactElement<ICardReadButtonProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderTags?: (Content: IContent) => ReactElement<ITagBarProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderPagination?: (site: ISite) => ReactElement<IPaginationProps>;
	latestCount?: number;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
	handleSelectContent?: (content: IContent) => void;
	handleAddTagToQuery?: (value: string) => void;
	handleSelectHome?: () => void;
	pageForward?: () => void;
	pageBack?: () => void;
	pageNumber?: number;
	pageCount?: number;
	analytics?: Analytics;
	skipAnalyticsFetch?: boolean;
	renderNotificationBannerWidget?: (widget: any) => ReactElement;
	renderNotificationPopupWidget?: (widget: any) => ReactElement;
	renderNoficiationModalWidget?: (widget: any) => ReactElement;
	renderMostRecentPostsWidget?: (widget: any) => ReactElement;
}

const Home = (props: IPrebuiltHomeProps) => {
	const {
		site,
		className = '',
		renderHeader,
		renderSubscribe,
		renderLatest,
		renderRecent,
		entries = [],
		latestCount = 1,
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
		renderPagination,
		searchTerm,
		handleSearch,
		handleSelectContent,
		handleAddTagToQuery,
		handleSelectHome,
		pageForward,
		pageBack,
		pageNumber,
		pageCount,
		analytics,
		skipAnalyticsFetch = false,
		renderMostRecentPostsWidget,
		renderNoficiationModalWidget,
		renderNotificationPopupWidget,
		renderNotificationBannerWidget,
	} = props;
	const { latest, recent } = splitEntries(entries, latestCount);
	const [_analytics, setAnalytics] = React.useState<Analytics | undefined>(analytics);
	React.useEffect(() => {
		if (!skipAnalyticsFetch) {
			const configFromSite = {
				siteId: site.id,
				slug: site.slug,
				siteUrl: site.url,
			};
			fetchAnalytics(
				configFromSite,
				entries.map((e) => e.id)
			).then(setAnalytics);
		}
	}, [skipAnalyticsFetch]);
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
					ref={ref}
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
					latest={
						renderLatest?.(latest) ?? (
							<Latest className="Prebuilt">
								{latest.map((content) => {
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
													renderCardStatistics?.(content, _analytics?.[content.id]) ?? (
														<Statistic.Bar
															className="Prebuilt"
															claps={_analytics?.[content.id]?.claps ?? 0}
															views={_analytics?.[content.id]?.pageviews ?? 0}
														/>
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
							</Latest>
						)
					}
					recent={
						renderRecent?.(recent) ?? (
							<Recent className="Prebuilt" pageNumber={pageNumber} pageCount={pageCount}>
								{recent.map((content) => {
									return (
										renderCard?.(content) ?? (
											<Card.Container
												key={content.id}
												className="Prebuilt"
												onClick={() => handleSelectContent?.(content)}
												imageUrl={content.coverMedia?.placeholderImage}
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
													renderCardStatistics?.(content, _analytics?.[content.id]) ?? (
														<Statistic.Bar
															className="Prebuilt"
															claps={_analytics?.[content.id]?.claps ?? 0}
															views={_analytics?.[content.id]?.pageviews ?? 0}
														/>
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
							</Recent>
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
					pagination={renderPagination?.(site) ?? <Pagination goForward={pageForward} goBack={pageBack} />}
				/>
			)}
		</Pinpoint>
	);
};

export default Home;
