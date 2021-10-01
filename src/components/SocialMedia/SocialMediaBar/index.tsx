import React from 'react';

export interface ISocialMediaBarProps {
	className?: string;
	children: any;
}

const SocialMediaBar = (props: ISocialMediaBarProps) => {
	const { className = '', children } = props;
	return <div className={`Pinpoint SocialMedia Bar ${className}`}>{children}</div>;
};

export default SocialMediaBar;
