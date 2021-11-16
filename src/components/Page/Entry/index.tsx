import React, { forwardRef, ReactElement } from 'react';
import type { ICoverMedia } from '../../../lib/types';
import type { IFeedbackProps } from '../../../lib/types/feedback';
import type { IFooterProps } from '../../Footer';
import type { IHeaderProps } from '../../Header';
import withWrapper from '../../Internal/withWrapper';
import type { IPaginationProps } from '../../Pagination';
import { CoverMedia } from '../../Renderer';
import type { ISidebarProps } from '../../Sidebar';

export interface IPageEntryProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	renderer?: ReactElement;
	sidebar?: ReactElement<ISidebarProps>;
	coverMedia?: ICoverMedia;
	footer?: ReactElement<IFooterProps>;
	pagination?: ReactElement<IPaginationProps>;
	feedback?: ReactElement<IFeedbackProps>;
	title?: string;
	zoomable?: boolean;
}

const Entry = forwardRef((props: IPageEntryProps, ref: any) => {
	const {
		className = '',
		header,
		renderer,
		sidebar,
		footer,
		coverMedia,
		title,
		pagination,
		zoomable,
		feedback,
	} = props;

	return (
		<div className={`Pinpoint Page Entry ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{withWrapper(
				<div className="entry">
					<div className="sidebarWrapper before">{sidebar}</div>
					<article>
						{coverMedia && <CoverMedia media={coverMedia} title={title} zoomable={zoomable ?? true} />}
						<section className="content">{renderer}</section>
						{feedback && withWrapper(feedback, 'feedback')}
					</article>
					<div className="sidebarWrapper after">{sidebar}</div>
				</div>,
				'entry'
			)}
			{withWrapper(pagination, 'pagination')}
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default Entry;
