import React, { Children, ReactElement } from 'react';
import { ICardContainerProps } from '../Card/Container';

export interface ILatestProps {
	className?: string;
	children?: ReactElement<ICardContainerProps>[] | ReactElement<ICardContainerProps>;
}

const Latest = (props: ILatestProps) => {
	const { className = '', children } = props;
	if (!Children.toArray(children).length) {
		return <></>;
	}
	return (
		<div className={`Pinpoint Latest ${className}`}>
			<h1 className="heading">Latest</h1>
			<div className="cards">{children}</div>
		</div>
	);
};

export default Latest;
