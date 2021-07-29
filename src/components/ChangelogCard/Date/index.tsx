import { DateTime, DateTimeFormatOptions } from 'luxon';

export interface IChangelogDateProps {
	className?: string;
	ts?: number;
	format?: DateTimeFormatOptions;
}

const Date = (props: IChangelogDateProps) => {
	const { className, ts = 0, format = DateTime.DATE_SHORT } = props;

	return (
		<span className={`Pinpoint Changelog Card Date ${className ?? ''}`}>
			{DateTime.fromMillis(ts).toLocaleString(format)}
		</span>
	);
};

export default Date;
