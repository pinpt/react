import React from 'react';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import { ITagBarProps } from '../../Tags/Bar';
import { ICardDateProps } from '../Date';
import { ICardDescriptionProps } from '../Description';
import { ICardReadButtonProps } from '../ReadButton';
import { ICardTitleProps } from '../Title';

export interface ICardContainerProps {
	title?: React.ReactElement<ICardTitleProps>;
	description?: React.ReactElement<ICardDescriptionProps>;
	statistics?: React.ReactElement<IStatisticsBarProps>;
	date?: React.ReactElement<ICardDateProps>;
	button?: React.ReactElement<ICardReadButtonProps>;
	tags?: React.ReactElement<ITagBarProps>;
	imageUrl?: string;
	alt?: string;
	className?: string;
	onClick?: () => void;
}

const Container = (props: ICardContainerProps) => {
	const { title, description, imageUrl, alt, className, statistics, date, button, tags, onClick } = props;

	return (
		<div className={`Pinpoint Content Card Container wrapper ${className ?? ''}`} onClick={onClick}>
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
