import Page from '../../Page';
import { ReactElement } from 'react';
import { IHeaderProps } from '../../../Header';
import Header from '../../../Prebuilt/Header';
import type { IContent, ISite } from '../../../../lib/types';
import { ILogoProps } from '../../../Logo';
import { ISearchBarProps } from '../../../Search/Bar';
import { ISubscribeProps } from '../../../Subscribe';
import { IThemeToggleProps } from '../../../ThemeToggle';
import Footer, { IPrebuiltFooterProps } from '../../../Prebuilt/Footer';
import { ISocialBarProps } from '../../../Social/Bar';
import { ICopyrightProps } from '../../../Copyright';
import Title from '../../Title';
import { GoBackWithArrow, GoForwardWithArrow } from '../../../Pagination';
import Search from '../../../Search';
import Card, { IDocumentationCardProps } from '../../Card';
import ActionLink from '../../../Internal/ActionLink';

export interface IPrebuiltDocumentationSearchResultsProps {
	className?: string;
	site: ISite;
	entries: IContent[];
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	title?: string;
	description?: string;
	largeTitle?: boolean;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSearchBar?: (site: ISite) => ReactElement<ISearchBarProps>;
	handleSelectHome?: () => void;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
	renderFooter?: (site: ISite) => ReactElement<IPrebuiltFooterProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialBarProps>;
	renderEntry?: (entry: IContent, site: ISite) => ReactElement<IDocumentationCardProps>;
	setCurrentEntry: (id: string) => void;
	renderBackButton?: (site: ISite) => ReactElement;
	handleCancelSearch?: () => void;
	renderEntryCta?: () => ReactElement;
}

const SearchResults = (props: IPrebuiltDocumentationSearchResultsProps) => {
	const {
		className = '',
		renderHeader,
		site,
		title,
		description,
		largeTitle,
		renderThemeToggle,
		renderSubscribe,
		renderLogo,
		handleSelectHome,
		searchTerm,
		renderSearchBar,
		handleSearch,
		renderSocial,
		renderCopyright,
		renderFooter,
		entries,
		renderEntry,
		setCurrentEntry,
		renderBackButton,
		handleCancelSearch,
		renderEntryCta,
	} = props;

	return (
		<Page.SearchResults
			className={`Prebuilt ${className}`}
			searchTerm={searchTerm}
			searchBar={
				renderSearchBar?.(site) ?? (
					<Search.Bar defaultValue={searchTerm} onSubmit={handleSearch} className="Prebuilt" />
				)
			}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						site={site}
						handleSelectHome={handleSelectHome}
						renderLogo={
							renderLogo
								? (_site) => renderLogo?.(_site)
								: (_site) => {
										return <Title site={_site} text={title} onClick={handleSelectHome} />;
								  }
						}
						renderSubscribe={renderSubscribe ?? (() => <></>)}
						renderThemeToggle={renderThemeToggle}
						title={largeTitle ? title : ''}
						description={description}
						renderSearch={() => <></>}
					/>
				)
			}
			footer={
				renderFooter?.(site) ?? (
					<Footer
						className="Prebuilt"
						site={site}
						renderCopyright={renderCopyright}
						renderLogo={renderLogo}
						renderSocial={renderSocial}
						renderSubscribe={renderSubscribe ?? (() => <></>)}
					/>
				)
			}
			results={entries.map((entry) => {
				return (
					renderEntry?.(entry, site) ?? (
						<Card
							className="Prebuilt"
							title={entry.title}
							description={entry.headline}
							key={entry.id}
							onClick={() => setCurrentEntry(entry.id)}
							onCtaClick={() => setCurrentEntry(entry.id)}
							cta={renderEntryCta?.() ?? <></>}
						/>
					)
				);
			})}
			backButton={
				renderBackButton?.(site) ?? (
					<ActionLink onClick={handleCancelSearch} className="Prebuilt">
						<GoBackWithArrow text="Close Search" />
					</ActionLink>
				)
			}
		/>
	);
};

export default SearchResults;
