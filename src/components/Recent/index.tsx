import { Children, ReactElement } from 'react';
import { ICardContainerProps } from '../Card/Container';

export interface IRecentProps {
	className?: string;
	children?: ReactElement<ICardContainerProps>[] | ReactElement<ICardContainerProps>;
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
			<div className="constraint content">
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
