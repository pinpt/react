import { forwardRef, ReactElement } from 'react';
import Loader from '../../../Loader';
import withWrapper from '../../../Internal/withWrapper';
import { IHeaderProps } from '../../../Header';
import { IFooterProps } from '../../../Footer';
import { ISearchBarProps } from '../../../Search/Bar';
import { IDocumentationCardProps } from '../../Card';
import { GoBackWithArrow } from '../../../Pagination';

export interface ISearchResultsProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	loading?: boolean;
	footer?: ReactElement<IFooterProps>;
	searchBar?: ReactElement<ISearchBarProps>;
	results?: ReactElement<IDocumentationCardProps>[];
	searchTerm?: string;
}

const SearchResults = forwardRef((props: ISearchResultsProps, ref: any) => {
	const { className = '', header, loading, footer, searchBar, results, searchTerm } = props;

	return (
		<div className={`Pinpoint Documentation Page SearchResults ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{loading ? (
				<div className="loaderWrapper">
					<Loader />
				</div>
			) : (
				withWrapper(
					<div className="Pinpoint Documentation Page Content">
						<div className="leftWrapper">
							{searchBar}
							<div className="back">
								<GoBackWithArrow text="Close Search" />
							</div>
						</div>
						<div className="rightWrapper">{results}</div>
					</div>,
					'documentationBody'
				)
			)}
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default SearchResults;
