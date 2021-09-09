import React from 'react';
export interface ILoaderProps {
	className?: string;
}

const Loader = (props: ILoaderProps) => {
	const { className = '' } = props;
	return (
		<div className={`Pinpoint Loader ${className}`}>
			<div className="inner" />
		</div>
	);
};

export default Loader;
