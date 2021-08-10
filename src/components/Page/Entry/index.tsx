import { ReactElement } from 'react';
import { CoverMedia } from '../../Renderer';
import withWrapper from '../../Internal/withWrapper';

import type { IFooterProps } from '../../Footer';
import type { ISidebarProps } from '../../Sidebar';
import type { IHeaderProps } from '../../Header';
import type { ICoverMedia } from '../../../lib/types';
export interface IPageEntryProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	renderer?: ReactElement;
	sidebar?: ReactElement<ISidebarProps>;
	coverMedia?: ICoverMedia;
	footer?: ReactElement<IFooterProps>;
	title?: string;
}

const Entry = (props: IPageEntryProps) => {
	const { className = '', header, renderer, sidebar, footer, coverMedia, title } = props;

	return (
		<div className={`Pinpoint Page Entry ${className}`}>
			{withWrapper(header, 'header')}
			{withWrapper(
				<div className="container">
					<div className="sidebarWrapper before">{sidebar}</div>
					<div className="content">
						{coverMedia && <CoverMedia media={coverMedia} title={title} />}
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
			{withWrapper(footer, 'footer')}
		</div>
	);
};

export default Entry;
