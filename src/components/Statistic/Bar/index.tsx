import Claps from '../Claps';
import Views from '../Views';

export interface IStatisticsBarProps {
	className?: string;
	claps?: number;
	views?: number;
}

const Bar = (props: IStatisticsBarProps) => {
	const { className, claps, views } = props;
	return (
		<div className={`Pinpoint Statistic Bar wrapper ${className ?? ''}`}>
			<Views count={views ?? 0} />
			<Claps count={claps ?? 0} />
		</div>
	);
};

export default Bar;
