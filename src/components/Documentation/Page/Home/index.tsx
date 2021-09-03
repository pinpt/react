import { forwardRef, ReactElement } from 'react';
import Loader from '../../../Loader';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { IOutlineProps } from '../../Outline';
import { IFooterProps } from '../../../Footer';
import { IPaginationProps } from '../../../Pagination';

export interface IDocumentationHomeProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	outline?: ReactElement<IOutlineProps>;
	content?: ReactElement;
	loading?: boolean;
	footer?: ReactElement<IFooterProps>;
	pagination?: ReactElement<IPaginationProps>;
}

const Home = forwardRef((props: IDocumentationHomeProps, ref: any) => {
	const { className = '', header, loading, outline, content, footer, pagination } = props;

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
						{outline}
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
