import { forwardRef, ReactElement } from 'react';
import React from 'react';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import withWrapper from '../../Internal/withWrapper';
import { ILatestProps } from '../../Latest';
import Loader from '../../Loader';
import { IPaginationProps } from '../../Pagination';
import { IRecentProps } from '../../Recent';
import { IQueryProps } from '../../Search/Query';
import { ISearchResultsProps } from '../../Search/Results';

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

const Dashboard = forwardRef((props: IPageDashboardProps, ref: any) => {
	const { className = '', footer, latest, recent, header, searchResults, loading, searchQuery, pagination } = props;

	return (
		<div className={`Pinpoint Page Dashboard ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{loading ? (
				<div className="loaderWrapper">
					<Loader />
				</div>
			) : (
				<>
					{withWrapper(searchQuery, 'searchQuery')}
					{withWrapper(searchResults, 'searchResults')}
					{withWrapper(latest, 'latest')}
					{withWrapper(recent, 'recent')}
				</>
			)}
			{withWrapper(pagination, 'pagination')}
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default Dashboard;
