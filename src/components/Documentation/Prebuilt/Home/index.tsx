import React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { IHeaderProps } from '../../../Header';
import Page from '../../Page';
import Header from '../../../Prebuilt/Header';
import type { Analytics, IContent, ISite } from '../../../../lib/types';
import { ILogoProps } from '../../../Logo';
import { ISearchBarProps } from '../../../Search/Bar';
import { ISubscribeProps } from '../../../Subscribe';
import { IThemeToggleProps } from '../../../ThemeToggle';
import Outline, { IOutlineProps } from '../../Outline';
import { Content } from '../../../Renderer';
import Footer, { IPrebuiltFooterProps } from '../../../Prebuilt/Footer';
import { ISocialBarProps } from '../../../Social/Bar';
import { ICopyrightProps } from '../../../Copyright';
import Title from '../../Title';
import Pagination, { IPaginationProps } from '../../../Pagination';
import Pinpoint from '../../../Pinpoint';
import Search from '../../../Search';

export interface IPrebuiltDocumentationHomeProps {
	className?: string;
	site: ISite;
	entries: IContent[];
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	handleSelectHome?: () => void;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderOutline?: (entries: IContent[]) => ReactElement<IOutlineProps>;
	currentEntry: string;
	setCurrentEntry: (entry: IContent, anchor?: string) => void;
	renderContent?: (entry?: IContent, currentEntry?: string, entries?: IContent[]) => ReactElement;
	renderFooter?: (site: ISite) => ReactElement<IPrebuiltFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	renderPagination?: (
		nextEntry?: IContent,
		previousEntry?: IContent,
		currentEntry?: IContent
	) => ReactElement<IPaginationProps>;
	nextEntry?: string;
	previousEntry?: string;
	title?: string;
	description?: string;
	currentAnchor?: string;
	largeTitle?: boolean;
	renderSearchBar?: (site: ISite) => ReactElement<ISearchBarProps>;
}

const Home = (props: IPrebuiltDocumentationHomeProps) => {
	const {
		className = '',
		renderHeader,
		site,
		entries,
		searchTerm,
		handleSearch,
		handleSelectHome,
		renderLogo,
		renderSearchBar,
		renderSubscribe,
		renderThemeToggle,
		renderOutline,
		currentEntry,
		setCurrentEntry,
		renderContent,
		renderFooter,
		renderCopyright,
		renderSocial,
		renderPagination,
		title,
		description,
		currentAnchor,
		largeTitle = false,
		nextEntry: nextEntryId,
		previousEntry: previousEntryId,
	} = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const entry = useMemo(() => {
		return entries.find((e) => e.id === currentEntry);
	}, [entries, currentEntry]);

	const nextEntry = useMemo(() => {
		return nextEntryId ? entries.find((e) => e.id === nextEntryId) : undefined;
	}, [entries, nextEntryId]);

	const previousEntry = useMemo(() => {
		return previousEntryId ? entries.find((e) => e.id === previousEntryId) : undefined;
	}, [entries, previousEntryId]);

	const closeMenu = useCallback(() => {
		setMenuOpen(false);
	}, []);

	const toggleMenu = useCallback(() => {
		setMenuOpen((x) => !x);
	}, []);

	const handlePaginate = useCallback(
		(entry: IContent) => {
			setCurrentEntry(entry);
			closeMenu();
		},
		[closeMenu]
	);

	const visitEntry = useCallback(
		(entry: IContent, anchor?: string) => {
			setCurrentEntry?.(entry, anchor);
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

	return (
		<Pinpoint siteId={site.id} contentId={currentEntry}>
			{(_ready, ref) => (
				<Page.Home
					ref={ref}
					className={`Prebuilt ${className}`}
					searchBar={
						renderSearchBar?.(site) ?? (
							<Search.Bar defaultValue={searchTerm} onSubmit={doSearch} className="Prebuilt" />
						)
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
								renderSearch={() => <></>}
								renderSubscribe={renderSubscribe ?? (() => <></>)}
								renderThemeToggle={renderThemeToggle}
								title={largeTitle ? title : ''}
								description={description}
								mobileMenu
								onToggleMenu={toggleMenu}
								mobileMenuOpen={menuOpen}
							/>
						)
					}
					outline={
						renderOutline?.(entries) ?? (
							<Outline
								className="Prebuilt"
								entries={entries}
								site={site}
								active={currentEntry}
								onClick={visitEntry}
								activeAnchor={currentAnchor}
							/>
						)
					}
					content={
						renderContent?.(entry, currentEntry, entries) ?? (
							<Content id={currentEntry} document={entry?.document} />
						)
					}
					pagination={
						renderPagination?.(nextEntry, previousEntry, entry) ?? (
							<Pagination
								goForward={nextEntry ? () => handlePaginate(nextEntry) : undefined}
								goBack={previousEntry ? () => handlePaginate(previousEntry) : undefined}
								goForwardText={<Pagination.GoForwardWithArrow text={nextEntry?.title} />}
								goBackText={<Pagination.GoBackWithArrow text={previousEntry?.title} />}
							/>
						)
					}
					footer={
						renderFooter?.(site) ?? (
							<Footer
								site={site}
								renderCopyright={renderCopyright}
								renderLogo={renderLogo}
								renderSocial={renderSocial}
								renderSubscribe={renderSubscribe ?? (() => <></>)}
							/>
						)
					}
				/>
			)}
		</Pinpoint>
	);
};

export default Home;
