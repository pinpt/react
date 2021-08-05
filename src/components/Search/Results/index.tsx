import { ReactElement } from 'react';
import { IChangelogCardContainerProps } from '../../ChangelogCard/Container';

export interface ISearchResultsProps {
	className?: string;
	children?: ReactElement<IChangelogCardContainerProps>[] | ReactElement<IChangelogCardContainerProps>;
}

const Results = (props: ISearchResultsProps) => {
	const { className = '', children } = props;
	return (
		<div className={`Pinpoint Search Results ${className}`}>
			<div className="constraint Search Results">
				<h1 className="heading">Search Results</h1>
				<div className="container">{children}</div>
			</div>
		</div>
	);
};

export default Results;
