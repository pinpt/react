import React from 'react';

export interface IManageProps {
	className?: string;
}

const Manage = (props: IManageProps) => {
	const { className = '' } = props;

	return <div className={`Pinpoint SubscriptionManage Wrapper ${className}`}>Manage your subscriptions</div>;
};

export default Manage;
