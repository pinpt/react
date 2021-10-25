import React, { forwardRef, ReactElement } from 'react';
import { IFooterProps } from '../../../Footer';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import Loader from '../../../Loader';
import { GoBackWithArrow } from '../../../Pagination';
import { ISearchBarProps } from '../../../Search/Bar';
import { IDocumentationCardProps } from '../../Card';

export interface ISearchResultsProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	loading?: boolean;
	footer?: ReactElement<IFooterProps>;
	searchBar?: ReactElement<ISearchBarProps>;
	results?: ReactElement<IDocumentationCardProps>[];
	searchTerm?: string;
	backButton?: ReactElement;
	outlineOpen?: boolean; // Only applies on mobile (small screen)
}

const SearchResults = forwardRef((props: ISearchResultsProps, ref: any) => {
	const { className = '', header, loading, footer, searchBar, results, backButton, outlineOpen, searchTerm } = props;

	return (
		<div className={`Pinpoint Documentation Page SearchResults ${outlineOpen ? 'open' : ''} ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{loading ? (
				<div className="loaderWrapper">
					<Loader />
				</div>
			) : (
				withWrapper(
					<div className="Pinpoint Documentation Page Content">
						<div className={`leftWrapper ${outlineOpen ? 'open' : ''}`}>
							{searchBar}
							<div className="back">{backButton}</div>
						</div>
						<div className={`rightWrapper ${outlineOpen ? 'open' : ''}`}>
							<h2 className="resultsText">
								Search Results for <strong>{searchTerm}</strong>
							</h2>
							{results}
						</div>
					</div>,
					'documentationBody'
				)
			)}
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default SearchResults;
