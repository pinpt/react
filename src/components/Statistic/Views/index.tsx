import { IStatisticProps } from '../types';

const Views = (props: IStatisticProps) => {
	const { count, className } = props;
	return (
		<div className={`Pinpoint Statistic Views wrapper ${className ?? ''}`}>
			<svg
				width={16}
				height={16}
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				viewBox="0 0 24 24"
			>
				<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
				<circle cx="12" cy="12" r="3"></circle>
			</svg>
			<span className="Statistic Views count">{count}</span>
		</div>
	);
};

export default Views;
