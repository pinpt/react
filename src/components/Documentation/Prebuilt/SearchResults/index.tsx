import React from 'react';
import SearchResultsPage from '../../Page/SearchResults';
import { ReactElement, useCallback, useState } from 'react';
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
import { GoBackWithArrow } from '../../../Pagination';
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
	setCurrentEntry: (entry: IContent) => void;
	renderBackButton?: (site: ISite) => ReactElement;
	handleCancelSearch?: () => void;
	renderEntryCta?: () => ReactElement;
	loading?: boolean;
	renderMobileMenu?: () => ReactElement;
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
		loading,
	} = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = useCallback(() => {
		setMenuOpen(false);
	}, []);

	const toggleMenu = useCallback(() => {
		setMenuOpen((x) => !x);
	}, []);

	const visitEntry = useCallback(
		(entry: IContent) => {
			setCurrentEntry?.(entry);
			closeMenu();
		},
		[setCurrentEntry, closeMenu]
	);

	const goHome = useCallback(() => {
		handleSelectHome?.();
		closeMenu();
	}, [handleSelectHome, closeMenu]);

	const doSearch = useCallback(
		(value: string) => {
			handleSearch?.(value);
			closeMenu();
		},
		[handleSearch, closeMenu]
	);

	const cancelSearch = useCallback(() => {
		handleCancelSearch?.();
		closeMenu();
	}, [handleCancelSearch, closeMenu]);

	return (
		<SearchResultsPage
			loading={loading}
			className={`Prebuilt ${className}`}
			searchTerm={searchTerm}
			searchBar={
				renderSearchBar?.(site) ?? <Search.Bar defaultValue={searchTerm} onSubmit={doSearch} className="Prebuilt" />
			}
			outlineOpen={menuOpen}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						site={site}
						handleSelectHome={goHome}
						renderLogo={
							renderLogo
								? (_site) => renderLogo?.(_site)
								: (_site) => {
										return <Title site={_site} text={title} onClick={goHome} />;
								  }
						}
						renderSubscribe={renderSubscribe ?? (() => <></>)}
						renderThemeToggle={renderThemeToggle}
						title={largeTitle ? title : ''}
						description={description}
						renderSearch={() => <></>}
						mobileMenu
						onToggleMenu={toggleMenu}
						mobileMenuOpen={menuOpen}
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
			results={
				entries.length > 0
					? entries.map((entry) => {
							return (
								renderEntry?.(entry, site) ?? (
									<Card
										className="Prebuilt"
										title={entry.title}
										description={entry.headline}
										key={entry.id}
										onClick={() => visitEntry(entry)}
										onCtaClick={() => visitEntry(entry)}
										cta={renderEntryCta?.() ?? <></>}
									/>
								)
							);
					  })
					: [
							<div className="empty" key={`${searchTerm}-empty`}>
								Sorry, we couldn't find anything.
							</div>,
					  ]
			}
			backButton={
				renderBackButton?.(site) ?? (
					<ActionLink onClick={cancelSearch} className="Prebuilt">
						<GoBackWithArrow text="Close Search" />
					</ActionLink>
				)
			}
		/>
	);
};

export default SearchResults;
