import { ReactElement } from 'react';
import { IChangelogCardContainerProps } from '../ChangelogCard/Container';

export interface IRecentProps {
	className?: string;
	children?: ReactElement<IChangelogCardContainerProps>[] | ReactElement<IChangelogCardContainerProps>;
}

const Recent = (props: IRecentProps) => {
	const { className = '', children } = props;
	return (
		<div className={`Pinpoint Recent ${className}`}>
			<h1 className="heading">Recent</h1>
			<div className="container">{children}</div>
		</div>
	);
};

export default Recent;
