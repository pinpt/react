import React from 'react';
import { ReactElement } from 'react';
import { IErrorProps } from '../../Error';
import { IFooterProps } from '../../Footer';
import withWrapper from '../../Internal/withWrapper';

export interface IPageErrorProps {
	className?: string;
	error: ReactElement<IErrorProps>;
	footer?: ReactElement<IFooterProps>;
}

const Error = (props: IPageErrorProps) => {
	const { className = '', error, footer } = props;

	return (
		<div className={`Pinpoint Page ErrorPage ${className}`}>
			{withWrapper(error, 'error')}
			{withWrapper(footer, 'footer')}
		</div>
	);
};

export default Error;
