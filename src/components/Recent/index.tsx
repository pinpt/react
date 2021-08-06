import { Children, ReactElement } from 'react';
import { IChangelogCardContainerProps } from '../ChangelogCard/Container';

export interface IRecentProps {
	className?: string;
	children?: ReactElement<IChangelogCardContainerProps>[] | ReactElement<IChangelogCardContainerProps>;
	pageNumber?: number;
	pageCount?: number;
}

const Recent = (props: IRecentProps) => {
	const { className = '', children, pageNumber, pageCount } = props;
	if (!Children.toArray(children).length) {
		return <></>;
	}
	return (
		<div className={`Pinpoint Recent ${className}`}>
			<div className="constraint Recent">
				<h1 className="heading">
					Recent{' '}
					{typeof pageNumber !== 'undefined' ? (
						<span className="pageIndicator">
							{pageNumber} of {pageCount}
						</span>
					) : undefined}
				</h1>
				<div className="container">{children}</div>
			</div>
		</div>
	);
};

export default Recent;
