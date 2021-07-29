import { ReactElement } from 'react';
import { IChangelogCardContainerProps } from '../ChangelogCard/Container';

export interface ILatestProps {
	className?: string;
	children?: ReactElement<IChangelogCardContainerProps>[] | ReactElement<IChangelogCardContainerProps>;
}

const Latest = (props: ILatestProps) => {
	const { className = '', children } = props;
	return (
		<div className={`Pinpoint Latest ${className}`}>
			<h1 className="heading">Latest</h1>
			<div className="container">{children}</div>
		</div>
	);
};

export default Latest;
