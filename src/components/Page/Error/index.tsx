import withWrapper from '../../Internal/withWrapper';

import { ReactElement } from 'react';
import { IErrorProps } from 'src/components/Error/types';

export interface IPageErrorProps {
	className?: string;
	error: ReactElement<IErrorProps>;
}

const Error = (props: IPageErrorProps) => {
	const { className = '', error } = props;

	return (
		<div className={`Pinpoint Page Error ${className}`}>
			{withWrapper(error, 'error')}
		</div>
	);
};

export default Error;
