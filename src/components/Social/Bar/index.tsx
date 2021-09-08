import React from 'react';
export interface ISocialBarProps {
	className?: string;
	children: any;
}

const Bar = (props: ISocialBarProps) => {
	const { className = '', children } = props;
	return <div className={`Pinpoint Social Bar ${className}`}>{children}</div>;
};

export default Bar;
