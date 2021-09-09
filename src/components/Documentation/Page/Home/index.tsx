import React from 'react';
import { forwardRef, ReactElement } from 'react';
import Loader from '../../../Loader';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { IOutlineProps } from '../../Outline';
import { IFooterProps } from '../../../Footer';
import { IPaginationProps } from '../../../Pagination';
import { ISearchBarProps } from '../../../Search/Bar';

export interface IDocumentationHomeProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	outline?: ReactElement<IOutlineProps>;
	content?: ReactElement;
	loading?: boolean;
	footer?: ReactElement<IFooterProps>;
	pagination?: ReactElement<IPaginationProps>;
	searchBar?: ReactElement<ISearchBarProps>;
	outlineOpen?: boolean; // Only applies on mobile (small screen)
}

const Home = forwardRef((props: IDocumentationHomeProps, ref: any) => {
	const { className = '', header, loading, outline, content, footer, pagination, searchBar, outlineOpen } = props;

	return (
		<div className={`Pinpoint Documentation Page Home ${outlineOpen ? 'open' : ''} ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{loading ? (
				<div className="loaderWrapper">
					<Loader />
				</div>
			) : (
				withWrapper(
					<div className="Pinpoint Documentation Page Content">
						<div className={`leftWrapper ${outlineOpen ? 'open' : ''}`}>
							{searchBar}
							{outline}
						</div>
						<div className={`rightWrapper ${outlineOpen ? 'open' : ''}`}>
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
