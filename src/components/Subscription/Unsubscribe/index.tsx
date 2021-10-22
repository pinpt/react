import React from 'react';

export interface IUnSubscribeProps {
	className?: string;
}

const Unsubscribe = (props: IUnSubscribeProps) => {
	const { className = '' } = props;

	return <div className={`Pinpoint SubscriptionUnsubscribe Wrapper ${className}`}>Unsubscribe</div>;
};

export default Unsubscribe;
