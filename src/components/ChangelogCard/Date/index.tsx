import { DateTime, DateTimeFormatOptions } from 'luxon';


export interface IChangelogDateProps {
	className?: string;
	ts?: number;
	format?: DateTimeFormatOptions;
}

const ChangelogDate = (props: IChangelogDateProps) => {
	const { className, ts = 0, format = DateTime.DATE_SHORT } = props;
	return (
		<span className={`Changelog Card Date ${className ?? ''}`}>
			{DateTime.fromMillis(ts).toLocaleString(format)}
		</span>
	);
};

export default ChangelogDate;
