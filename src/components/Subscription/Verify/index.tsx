import React from 'react';

export interface IVerifyeProps {
	className?: string;
}

const Verify = (props: IVerifyeProps) => {
	const { className = '' } = props;

	return <div className={`Pinpoint SubscriptionVerify Wrapper ${className}`}>Verify your subscription</div>;
};

export default Verify;
