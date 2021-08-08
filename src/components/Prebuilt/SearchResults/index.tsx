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

import type { Content, SearchTerm, Site } from '../../../lib/types';
export interface IPrebuiltSearchResultsProps {
	className?: string;
	site: Site;
	entries?: Content[];
	renderHeader?: (site: Site) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: Site) => ReactElement<ISubscribeProps>;
	renderSearchResults?: (entries: Content[]) => ReactElement<ISearchResultsProps>;
	renderCard?: (Content: Content) => ReactElement<ICardContainerProps>;
	renderCardTitle?: (Content: Content) => ReactElement<ICardTitleProps>;
	renderCardDate?: (Content: Content) => ReactElement<ICardDateProps>;
	renderCardDescription?: (Content: Content) => ReactElement<ICardDescriptionProps>;
	renderCardStatistics?: (Content: Content) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (Content: Content) => ReactElement<ICardReadButtonProps>;
	renderFooter?: (site: Site) => ReactElement<IFooterProps>;
	renderSocial?: (site: Site) => ReactElement<ISocialBarProps>;
	renderCopyright?: (site: Site) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: Site) => ReactElement<ILogoProps>;
	renderTags?: (Content: Content) => ReactElement<ITagBarProps>;
	renderThemeToggle?: (site: Site) => ReactElement<IThemeToggleProps>;
	renderSearch?: (site: Site) => ReactElement<ISearchBarProps>;
	renderSearchQuery?: (site: Site) => ReactElement<IQueryProps>;
	searchTerm?: string;
	searchTags?: string[];
	handleSearch?: (value: string) => void;
	handleSelectContent?: (id: string) => void;
	handleRemoveFromQuery?: (value: string, clear: boolean) => void;
	handleAddTagToQuery?: (value: string) => void;
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
			searchQuery={
				renderSearchQuery?.(site) ?? (
					<Search.Query
						className="Prebuilt"
						terms={[
							...searchTags.map((t) => {
								return {
									type: 'tag',
									value: t,
								} as SearchTerm;
							}),
							...(searchTerm
								? [
										{
											type: 'text',
											value: searchTerm,
										} as SearchTerm,
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
						{entries.map((Content) => {
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
											renderCardStatistics?.(Content) ?? (
												<Statistic.Bar className="Prebuilt" claps={0} views={0} />
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
					</Search.Results>
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
		/>
	);
};

export default SearchResults;
