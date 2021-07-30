import { ReactElement } from 'react';
import { IFooterProps } from '../Footer';
import { ILatestProps } from '../Latest';
import { IRecentProps } from '../Recent';

export interface IPageProps {
	className?: string;
	latest?: ReactElement<ILatestProps>;
	recent?: ReactElement<IRecentProps>;
	footer?: ReactElement<IFooterProps>;
}

const Page = (props: IPageProps) => {
	const { className = '', footer, latest, recent } = props;
	return (
		<div className={`Pinpoint Page ${className}`}>
			{latest}
			{recent}
			{footer}
		</div>
	);
};

export default Page;
