import { forwardRef, ReactElement } from 'react';
import { CoverMedia } from '../../Renderer';
import withWrapper from '../../Internal/withWrapper';
import React from 'react';
import type { IFooterProps } from '../../Footer';
import type { ISidebarProps } from '../../Sidebar';
import type { IHeaderProps } from '../../Header';
import type { ICoverMedia } from '../../../lib/types';
import { IPaginationProps } from '../../Pagination';
export interface IPageEntryProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	renderer?: ReactElement;
	sidebar?: ReactElement<ISidebarProps>;
	coverMedia?: ICoverMedia;
	footer?: ReactElement<IFooterProps>;
	pagination?: ReactElement<IPaginationProps>;
	title?: string;
	zoomable?: boolean;
}

const Entry = forwardRef((props: IPageEntryProps, ref: any) => {
	const { className = '', header, renderer, sidebar, footer, coverMedia, title, pagination, zoomable } = props;

	return (
		<div className={`Pinpoint Page Entry ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			{withWrapper(
				<div className="entry">
					<div className="sidebarWrapper before">{sidebar}</div>
					<article>
						{coverMedia && <CoverMedia media={coverMedia} title={title} zoomable={zoomable ?? true} />}
						<section className="content">{renderer}</section>
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
