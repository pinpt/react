import { ReactElement } from 'react';
import { ISearchResultsProps } from '../../Search/Results';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILatestProps } from '../../Latest';
import { IRecentProps } from '../../Recent';

export interface IPageDashboardProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	searchResults?: ReactElement<ISearchResultsProps>;
	latest?: ReactElement<ILatestProps>;
	recent?: ReactElement<IRecentProps>;
	footer?: ReactElement<IFooterProps>;
}

const Dashboard = (props: IPageDashboardProps) => {
	const { className = '', footer, latest, recent, header, searchResults } = props;
	return (
		<div className={`Pinpoint Page Dashboard ${className}`}>
			{header}
			{searchResults}
			{latest}
			{recent}
			{footer}
		</div>
	);
};

export default Dashboard;
