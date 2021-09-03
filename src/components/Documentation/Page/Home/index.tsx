import { forwardRef, ReactElement } from 'react';
import Loader from '../../../Loader';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { IOutlineProps } from '../../Outline';
import { IFooterProps } from '../../../Footer';
import { IPaginationProps } from '../../../Pagination';
import { ISearchBarProps } from 'src/components/Search/Bar';

export interface IDocumentationHomeProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	outline?: ReactElement<IOutlineProps>;
	content?: ReactElement;
	loading?: boolean;
	footer?: ReactElement<IFooterProps>;
	pagination?: ReactElement<IPaginationProps>;
	searchBar?: ReactElement<ISearchBarProps>;
}

const Home = forwardRef((props: IDocumentationHomeProps, ref: any) => {
	const { className = '', header, loading, outline, content, footer, pagination, searchBar } = props;

	return (
		<div className={`Pinpoint Documentation Page Home ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{loading ? (
				<div className="loaderWrapper">
					<Loader />
				</div>
			) : (
				withWrapper(
					<div className="Pinpoint Documentation Page Content">
						<div className="leftWrapper">
							{searchBar}
							{outline}
						</div>
						<div className="rightWrapper">
							{content}
							{pagination}
						</div>
					</div>,
					'documentationBody'
				)
			)}
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default Home;
