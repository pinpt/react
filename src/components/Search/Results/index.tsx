import { Children, ReactElement } from 'react';
import React from 'react';
import { ICardContainerProps } from '../../Card/Container';

export interface ISearchResultsProps {
	className?: string;
	children?: ReactElement<ICardContainerProps>[] | ReactElement<ICardContainerProps>;
	clearQuery?: () => void;
}

const Results = (props: ISearchResultsProps) => {
	const { className = '', children, clearQuery } = props;
	const childCount = Children.toArray(children).length;
	return (
		<div className={`Pinpoint Search Results ${className}`}>
			{childCount > 0 ? (
				<>
					<h1 className="heading">Search Results</h1>
					<div className="cards">{children}</div>
				</>
			) : (
				<div className="empty">
					Sorry, we couldn't find anything.
					<small className="back" onClick={clearQuery}>
						<svg
							className="icon"
							width={14}
							height={16}
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="arrow-left"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
							></path>
						</svg>
						Back to all entries
					</small>
				</div>
			)}
		</div>
	);
};

export default Results;
