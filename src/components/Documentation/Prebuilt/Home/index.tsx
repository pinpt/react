import { ReactElement, useCallback, useMemo } from 'react';
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

export interface IPrebuiltDocumentationHomeProps {
	className?: string;
	site: ISite;
	entries: IContent[];
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	searchTerm?: string;
	handleSearch?: (value: string) => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	handleSelectHome?: () => void;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
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
		renderSearch,
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

	const entry = useMemo(() => {
		return entries.find((e) => e.id === currentEntry);
	}, [entries, currentEntry]);

	const nextEntry = useMemo(() => {
		return nextEntryId ? entries.find((e) => e.id === nextEntryId) : undefined;
	}, [entries, nextEntryId]);

	const previousEntry = useMemo(() => {
		return previousEntryId ? entries.find((e) => e.id === previousEntryId) : undefined;
	}, [entries, previousEntryId]);

	const handlePaginate = useCallback((entry: IContent) => {
		setCurrentEntry(entry);
	}, []);

	return (
		<Page.Home
			className={`Prebuilt ${className}`}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						site={site}
						searchTerm={searchTerm}
						handleSearch={handleSearch}
						handleSelectHome={handleSelectHome}
						renderLogo={
							renderLogo
								? (_site) => renderLogo?.(_site)
								: (_site) => {
										return <Title site={_site} text={title} onClick={handleSelectHome} />;
								  }
						}
						renderSearch={renderSearch}
						renderSubscribe={renderSubscribe ?? (() => <></>)}
						renderThemeToggle={renderThemeToggle}
						title={largeTitle ? title : ''}
						description={description}
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
						onClick={setCurrentEntry}
						activeAnchor={currentAnchor}
					/>
				)
			}
			content={
				renderContent?.(entry, currentEntry, entries) ?? <Content id={currentEntry} document={entry?.document} />
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
	);
};

export default Home;
