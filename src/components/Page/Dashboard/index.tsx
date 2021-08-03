import { ReactElement } from 'react';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILatestProps } from '../../Latest';
import { IRecentProps } from '../../Recent';

export interface IPageDashboardProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	latest?: ReactElement<ILatestProps>;
	recent?: ReactElement<IRecentProps>;
	footer?: ReactElement<IFooterProps>;
}

const PageDashboard = (props: IPageDashboardProps) => {
	const { className = '', footer, latest, recent, header } = props;
	return (
		<div className={`Pinpoint Page ${className}`}>
			{header}
			{latest}
			{recent}
			{footer}
		</div>
	);
};

export default PageDashboard;
