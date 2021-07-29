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
	imageUrl?: string;
	alt?: string;
	className?: string;
}

const ChangelogCardContainer = (props: IChangelogCardContainerProps) => {
	const { title, description, imageUrl, alt, className, statistics, date, button } = props;

	return (
		<div className={`Pinpoint Changelog Card Container wrapper ${className ?? ''}`}>
			{imageUrl && <img className="cover" src={imageUrl} alt={alt} />}
			<div className="content">
				{title}
				{date}
				{description}
				<div className="footer">
					{button && <div className="button">{button}</div>}
					{statistics && <div className="statistics">{statistics}</div>}
				</div>
			</div>
		</div>
	);
};

export default ChangelogCardContainer;
