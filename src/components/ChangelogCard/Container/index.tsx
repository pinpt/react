import React from 'react';
import { ITagBarProps } from '../../Tags/Bar';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import { IChangelogDateProps } from '../Date';
import { IChangelogDescriptionProps } from '../Description';
import { IChangelogReadButtonProps } from '../ReadButton';
import { IChangelogTitleProps } from '../Title';

export interface IChangelogCardContainerProps {
	title?: React.ReactElement<IChangelogTitleProps>;
	description?: React.ReactElement<IChangelogDescriptionProps>;
	statistics?: React.ReactElement<IStatisticsBarProps>;
	date?: React.ReactElement<IChangelogDateProps>;
	button?: React.ReactElement<IChangelogReadButtonProps>;
	tags?: React.ReactElement<ITagBarProps>;
	imageUrl?: string;
	alt?: string;
	className?: string;
}

const Container = (props: IChangelogCardContainerProps) => {
	const { title, description, imageUrl, alt, className, statistics, date, button, tags } = props;

	return (
		<div className={`Pinpoint Changelog Card Container wrapper ${className ?? ''}`}>
			{imageUrl && <img className="cover" src={imageUrl} alt={alt} />}
			<div className="content">
				{title}
				{date}
				{tags}
				{description}
				<div className="footer">
					{button && <div className="button">{button}</div>}
					{statistics && <div className="statistics">{statistics}</div>}
				</div>
			</div>
		</div>
	);
};

export default Container;
