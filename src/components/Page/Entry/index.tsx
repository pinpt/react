import { forwardRef, ReactElement } from 'react';
import { CoverMedia } from '../../Renderer';
import withWrapper from '../../Internal/withWrapper';

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
					<div className="content">
						{coverMedia && <CoverMedia media={coverMedia} title={title} zoomable={zoomable ?? true} />}
						<div className="renderer">
							<article className="changelog notebook-editor read-only">
								<section className="ProseMirror">{renderer}</section>
							</article>
						</div>
					</div>
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
