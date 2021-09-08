import React from 'react';
export interface ICardTitleProps {
	className?: string;
	title: string;
}

const Title = (props: ICardTitleProps) => {
	const { className, title } = props;
	return <h2 className={`Pinpoint Content Card Title ${className ?? ''}`}>{title}</h2>;
};

export default Title;
