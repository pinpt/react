import { ReactElement } from 'react';
import { splitEntries } from '../../../lib';
import Card from '../../Card';
import { ICardContainerProps } from '../../Card/Container';
import { ICardDateProps } from '../../Card/Date';
import { ICardDescriptionProps } from '../../Card/Description';
import { ICardReadButtonProps } from '../../Card/ReadButton';
import { ICardTitleProps } from '../../Card/Title';
import Copyright, { ICopyrightProps } from '../../Copyright';
import Footer, { IFooterProps } from '../../Footer';
import Header, { IHeaderProps } from '../../Header';
import Latest, { ILatestProps } from '../../Latest';
import Logo, { ILogoProps } from '../../Logo';
import Page from '../../Page';
import Pagination, { IPaginationProps } from '../../Pagination';
import Recent, { IRecentProps } from '../../Recent';
import Search from '../../Search';
import { ISearchBarProps } from '../../Search/Bar';
import Social from '../../Social';
import { ISocialBarProps } from '../../Social/Bar';
import Statistic from '../../Statistic';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import ThemeToggle, { IThemeToggleProps } from '../../ThemeToggle';

import type { Analytics, Content, Site } from '../../../lib/types';
export interface IPrebuiltHomeProps {
	className?: string;
	site: Site;
	entries?: Content[];
	renderHeader?: (site: Site) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: Site) => ReactElement<ISubscribeProps>;
	renderLatest?: (entries: Content[]) => ReactElement<ILatestProps>;
	renderRecent?: (entries: Content[]) => ReactElement<IRecentProps>;
	renderCard?: (Content: Content) => ReactElement<ICardContainerProps>;
	renderCardTitle?: (Content: Content) => ReactElement<ICardTitleProps>;
	renderCardDate?: (Content: Content) => ReactElement<ICardDateProps>;
	renderCardDescription?: (Content: Content) => ReactElement<ICardDescriptionProps>;
	renderCardStatistics?: (
		Content: Content,
		analytics?: { claps: number; pageviews: number }
	) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (Content: Content) => ReactElement<ICardReadButtonProps>;
	renderFooter?: (site: Site) => ReactElement<IFooterProps>;
	renderSocial?: (site: Site) => ReactElement<ISocialBarProps>;
	renderCopyright?: (site: Site) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: Site) => ReactElement<ILogoProps>;
	renderTags?: (Content: Content) => ReactElement<ITagBarProps>;
	renderThemeToggle?: (site: Site) => ReactElement<IThemeToggleProps>;
	renderSearch?: (site: Site) => ReactElement<ISearchBarProps>;
	renderPagination?: (site: Site) => ReactElement<IPaginationProps>;
	latestCount?: number;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
	handleSelectContent?: (id: string) => void;
	handleAddTagToQuery?: (value: string) => void;
	pageForward?: () => void;
	pageBack?: () => void;
	pageNumber?: number;
	pageCount?: number;
	analytics?: Analytics;
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
		pageForward,
		pageBack,
		pageNumber,
		pageCount,
		analytics,
	} = props;
	const { latest, recent } = splitEntries(entries, latestCount);
	return (
		<Page.Dashboard
			className={`Prebuilt ${className}`}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						title={`${site.name}`}
						description={site.theme?.description ?? site.name}
						subscribe={
							renderSubscribe?.(site) ?? (
								<Subscribe className="Prebuilt" href={`https://${site.slug}.pinpoint.com/subscribe`} />
							)
						}
						themeToggle={renderThemeToggle?.(site) ?? <ThemeToggle className="Prebuilt" />}
						search={
							renderSearch?.(site) ?? (
								<Search.Bar defaultValue={searchTerm} onSubmit={handleSearch} className="Prebuilt" />
							)
						}
					/>
				)
			}
			latest={
				renderLatest?.(latest) ?? (
					<Latest className="Prebuilt">
						{latest.map((Content) => {
							return (
								renderCard?.(Content) ?? (
									<Card.Container
										key={Content.id}
										className="Prebuilt"
										imageUrl={Content.coverMedia?.placeholderImage}
										title={
											renderCardTitle?.(Content) ?? <Card.Title className="Prebuilt" title={Content.title} />
										}
										date={
											renderCardDate?.(Content) ?? (
												<Card.Date className="Prebuilt" ts={Content.publishedAt} />
											)
										}
										description={
											renderCardDescription?.(Content) ?? (
												<Card.Description className="Prebuilt" description={Content.headline} />
											)
										}
										statistics={
											renderCardStatistics?.(Content, analytics?.[Content.id]) ?? (
												<Statistic.Bar
													className="Prebuilt"
													claps={analytics?.[Content.id]?.claps ?? 0}
													views={analytics?.[Content.id]?.pageviews ?? 0}
												/>
											)
										}
										button={
											renderCardButton?.(Content) ?? (
												<Card.ReadButton
													onClick={() => handleSelectContent?.(Content.id)}
													className="Prebuilt"
												/>
											)
										}
										tags={
											renderTags?.(Content) ?? (
												<Tags.Bar
													className="Prebuilt"
													tags={Content.tags ?? []}
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
						{recent.map((Content) => {
							return (
								renderCard?.(Content) ?? (
									<Card.Container
										key={Content.id}
										className="Prebuilt"
										imageUrl={Content.coverMedia?.placeholderImage}
										title={
											renderCardTitle?.(Content) ?? <Card.Title className="Prebuilt" title={Content.title} />
										}
										date={
											renderCardDate?.(Content) ?? (
												<Card.Date className="Prebuilt" ts={Content.publishedAt} />
											)
										}
										description={
											renderCardDescription?.(Content) ?? (
												<Card.Description className="Prebuilt" description={Content.headline} />
											)
										}
										statistics={
											renderCardStatistics?.(Content, analytics?.[Content.id]) ?? (
												<Statistic.Bar
													className="Prebuilt"
													claps={analytics?.[Content.id]?.claps ?? 0}
													views={analytics?.[Content.id]?.pageviews ?? 0}
												/>
											)
										}
										button={
											renderCardButton?.(Content) ?? (
												<Card.ReadButton
													onClick={() => handleSelectContent?.(Content.id)}
													className="Prebuilt"
												/>
											)
										}
										tags={
											renderTags?.(Content) ?? (
												<Tags.Bar
													className="Prebuilt"
													tags={Content.tags ?? []}
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
						className="Prebuilt"
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
								<Subscribe className="Prebuilt" href={`https://${site.slug}.pinpoint.com/subscribe`} />
							)
						}
					/>
				)
			}
			pagination={renderPagination?.(site) ?? <Pagination goForward={pageForward} goBack={pageBack} />}
		/>
	);
};

export default Home;
