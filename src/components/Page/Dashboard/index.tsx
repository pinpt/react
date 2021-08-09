import { ReactElement } from 'react';
import { ISearchResultsProps } from '../../Search/Results';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILatestProps } from '../../Latest';
import { IRecentProps } from '../../Recent';
import Loader from '../../Loader';
import { IQueryProps } from '../../Search/Query';
import { IPaginationProps } from '../../Pagination';

export interface IPageDashboardProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	searchQuery?: ReactElement<IQueryProps>;
	searchResults?: ReactElement<ISearchResultsProps>;
	latest?: ReactElement<ILatestProps>;
	recent?: ReactElement<IRecentProps>;
	footer?: ReactElement<IFooterProps>;
	pagination?: ReactElement<IPaginationProps>;
	loading?: boolean;
}

const Dashboard = (props: IPageDashboardProps) => {
	const { className = '', footer, latest, recent, header, searchResults, loading, searchQuery, pagination } = props;
	return (
		<div className={`Pinpoint Page Dashboard ${className}`}>
			{header}
			{loading ? (
				<div className="loadingWrapper">
					<Loader />
				</div>
			) : (
				<>
					{searchQuery}
					{searchResults}
					{latest}
					{recent}
				</>
			)}
			{pagination}
			{footer}
		</div>
	);
};

export default Dashboard;
