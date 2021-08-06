import { ReactElement } from 'react';
import { IChangelogCardContainerProps } from '../../ChangelogCard/Container';
import Header, { IHeaderProps } from '../../Header';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import Card from '../../ChangelogCard';
import { Entry, SearchTerm, Site } from '../../../lib';
import Page from '../../Page';
import { IChangelogTitleProps } from '../../ChangelogCard/Title';
import { IChangelogDateProps } from '../../ChangelogCard/Date';
import { IChangelogDescriptionProps } from '../../ChangelogCard/Description';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import { IChangelogReadButtonProps } from '../../ChangelogCard/ReadButton';
import Statistic from '../../Statistic';
import Footer, { IFooterProps } from '../../Footer';
import { ISocialBarProps } from '../../Social/Bar';
import Copyright, { ICopyrightProps } from '../../Copyright';
import Logo, { ILogoProps } from '../../Logo';
import Social from '../../Social';
import { ITagBarProps } from '../../Tags/Bar';
import Tags from '../../Tags';
import ThemeToggle, { IThemeToggleProps } from '../../ThemeToggle';
import { ISearchResultsProps } from '../../Search/Results';
import { ISearchBarProps } from '../../Search/Bar';
import Search from '../../Search';
import { IQueryProps } from '../../Search/Query';
export interface IPrebuiltSearchResultsProps {
	className?: string;
	site: Site;
	entries?: Entry[];
	renderHeader?: (site: Site) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: Site) => ReactElement<ISubscribeProps>;
	renderSearchResults?: (entries: Entry[]) => ReactElement<ISearchResultsProps>;
	renderCard?: (entry: Entry) => ReactElement<IChangelogCardContainerProps>;
	renderCardTitle?: (entry: Entry) => ReactElement<IChangelogTitleProps>;
	renderCardDate?: (entry: Entry) => ReactElement<IChangelogDateProps>;
	renderCardDescription?: (entry: Entry) => ReactElement<IChangelogDescriptionProps>;
	renderCardStatistics?: (entry: Entry) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (entry: Entry) => ReactElement<IChangelogReadButtonProps>;
	renderFooter?: (site: Site) => ReactElement<IFooterProps>;
	renderSocial?: (site: Site) => ReactElement<ISocialBarProps>;
	renderCopyright?: (site: Site) => ReactElement<ICopyrightProps>;
	renderLogo?: (site: Site) => ReactElement<ILogoProps>;
	renderTags?: (entry: Entry) => ReactElement<ITagBarProps>;
	renderThemeToggle?: (site: Site) => ReactElement<IThemeToggleProps>;
	renderSearch?: (site: Site) => ReactElement<ISearchBarProps>;
	renderSearchQuery?: (site: Site) => ReactElement<IQueryProps>;
	searchTerm?: string;
	searchTags?: string[];
	handleSearch?: (value: string) => void;
	handleSelectEntry?: (id: string) => void;
	handleRemoveFromQuery?: (value: string, clear: boolean) => void;
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
		handleSelectEntry,
		handleRemoveFromQuery,
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
						title={`${site.name} Changelog`}
						description={site.theme.description}
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
						{entries.map((entry) => {
							return (
								renderCard?.(entry) ?? (
									<Card.Container
										key={entry.id}
										className="Prebuilt"
										imageUrl={entry.cover_image}
										title={
											renderCardTitle?.(entry) ?? <Card.Title className="Prebuilt" title={entry.title} />
										}
										date={
											renderCardDate?.(entry) ?? <Card.Date className="Prebuilt" ts={entry.publishedAt} />
										}
										description={
											renderCardDescription?.(entry) ?? (
												<Card.Description className="Prebuilt" description={entry.headline} />
											)
										}
										statistics={
											renderCardStatistics?.(entry) ?? (
												<Statistic.Bar className="Prebuilt" claps={0} views={0} />
											)
										}
										button={
											renderCardButton?.(entry) ?? (
												<Card.ReadButton
													onClick={() => handleSelectEntry?.(entry.id)}
													className="Prebuilt"
												/>
											)
										}
										tags={renderTags?.(entry) ?? <Tags.Bar className="Prebuilt" tags={entry.tags ?? []} />}
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

export default SearchResults;
