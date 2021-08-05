import { ReactElement } from 'react';
import { ISearchResultsProps } from '../../Search/Results';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILatestProps } from '../../Latest';
import { IRecentProps } from '../../Recent';
import Loader from '../../Loader';

export interface IPageDashboardProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	searchResults?: ReactElement<ISearchResultsProps>;
	latest?: ReactElement<ILatestProps>;
	recent?: ReactElement<IRecentProps>;
	footer?: ReactElement<IFooterProps>;
	loading?: boolean;
}

const Dashboard = (props: IPageDashboardProps) => {
	const { className = '', footer, latest, recent, header, searchResults, loading } = props;
	return (
		<div className={`Pinpoint Page Dashboard ${className}`}>
			{header}
			{loading ? (
				<div className="loadingWrapper">
					<Loader />
				</div>
			) : (
				<>
					{searchResults}
					{latest}
					{recent}
				</>
			)}
			{footer}
		</div>
	);
};

export default Dashboard;
