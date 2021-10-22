import React from 'react';

export interface IManageProps {
	className?: string;
}
const baseClass = 'Pinpoint SubscriptionManage';
const Manage = (props: IManageProps) => {
	const { className = '' } = props;

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<p className={`${baseClass} Description`}>Manage your subscriptions below. Missing subscriptions you expect to see? You may have subscribed with a different email address.</p>
			<div className={`${baseClass} Entry`}>
				<div>
					<span className={`${baseClass} Name`}>Subscription Name</span>
					<span className={`${baseClass} Date`}>Subscription Date</span>
				</div>
				<div>
					<div>Update</div>
					<div>Unsubscribe</div>
				</div>
			</div>
		</div>
	);
};

export default Manage;
