import withWrapper from '../../Internal/withWrapper';

import { ReactElement } from 'react';
import { IErrorProps } from 'src/components/Error/types';
import { IFooterProps } from 'src/components/Footer';

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
