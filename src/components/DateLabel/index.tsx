import React from 'react';
import { DateTime, DateTimeFormatOptions } from 'luxon';

export interface IDateProps {
	className?: string;
	ts?: number;
	format?: DateTimeFormatOptions;
}

const DateLabel = (props: IDateProps) => {
	const { className, ts = 0, format = DateTime.DATE_SHORT } = props;

	return <span className={`Pinpoint Date ${className ?? ''}`}>{DateTime.fromMillis(ts).toLocaleString(format)}</span>;
};

export default DateLabel;
