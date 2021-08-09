import { ReactElement } from 'react';
import Card from '../../Card';
import { ICardContainerProps } from '../../Card/Container';
import { ICardDateProps } from '../../Card/Date';
import { ICardDescriptionProps } from '../../Card/Description';
import { ICardReadButtonProps } from '../../Card/ReadButton';
import { ICardTitleProps } from '../../Card/Title';
import Copyright, { ICopyrightProps } from '../../Copyright';
import Footer, { IFooterProps } from '../../Footer';
import Header, { IHeaderProps } from '../../Header';
import Logo, { ILogoProps } from '../../Logo';
import Page from '../../Page';
import Search from '../../Search';
import { ISearchBarProps } from '../../Search/Bar';
import { IQueryProps } from '../../Search/Query';
import { ISearchResultsProps } from '../../Search/Results';
import Social from '../../Social';
import { ISocialBarProps } from '../../Social/Bar';
import Statistic from '../../Statistic';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import Tags from '../../Tags';
import { ITagBarProps } from '../../Tags/Bar';
import ThemeToggle, { IThemeToggleProps } from '../../ThemeToggle';

import type { IContent, ISearchTerm, ISite } from '../../../lib/types';
export interface IPrebuiltSearchResultsProps {
	className?: string;
	site: ISite;
	entries?: IContent[];
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderSearchResults?: (entries: IContent[]) => ReactElement<ISearchResultsProps>;
	renderCard?: (content: IContent) => ReactElement<ICardContainerProps>;
	renderCardTitle?: (content: IContent) => ReactElement<ICardTitleProps>;
	renderCardDate?: (content: IContent) => ReactElement<ICardDateProps>;
	renderCardDescription?: (content: IContent) => ReactElement<ICardDescriptionProps>;
	renderCardStatistics?: (content: IContent) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (content: IContent) => ReactElement<ICardReadButtonProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialBarProps>;
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
	} = props;
	return (
		<Page.Dashboard
			className={`Prebuilt ${className}`}
			loading={loading}
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
									src={site.logoUrl}
									href={site.theme?.logoLink ?? site.url}
									title="Header Logo Search Page"
								/>
							)
						}
					/>
				)
			}
			searchQuery={
				renderSearchQuery?.(site) ?? (
					<Search.Query
						className="Prebuilt"
						terms={[
							...searchTags.map((t) => {
								return {
									type: 'tag',
									value: t,
								} as ISearchTerm;
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
										coverMedia={content.coverMedia}
										title={
											renderCardTitle?.(content) ?? <Card.Title className="Prebuilt" title={content.title} />
										}
										date={
											renderCardDate?.(content) ?? (
												<Card.Date className="Prebuilt" ts={content.publishedAt} />
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
													tags={content.tags ?? []}
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
												title="Footer Logo Search Page"
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

export default SearchResults;
