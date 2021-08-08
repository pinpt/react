import { DateTime, DateTimeFormatOptions } from 'luxon';

export interface ICardDateProps {
	className?: string;
	ts?: number;
	format?: DateTimeFormatOptions;
}

const Date = (props: ICardDateProps) => {
	const { className, ts = 0, format = DateTime.DATE_SHORT } = props;

	return (
		<span className={`Pinpoint Content Card Date ${className ?? ''}`}>
			{DateTime.fromMillis(ts).toLocaleString(format)}
		</span>
	);
};

export default Date;
