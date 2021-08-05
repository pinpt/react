import { ReactElement } from 'react';
import { IFooterProps } from '../../Footer';
import { ISidebarProps } from '../../Sidebar';
import { IHeaderProps } from '../../Header';

export interface IPageEntryProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	renderer?: ReactElement;
	sidebar?: ReactElement<ISidebarProps>;
	coverImage?: string;
	footer?: ReactElement<IFooterProps>;
}

const Entry = (props: IPageEntryProps) => {
	const { className = '', header, renderer, coverImage, sidebar, footer } = props;

	return (
		<div className={`Pinpoint Page Entry ${className}`}>
			<div className="constraint">
				{header}
				<div className="body">
					<div className="sidebar">{sidebar}</div>
					<div className="content">
						{coverImage && (
							<div className="cover covermedia">
								<img className="image" src={coverImage} />
							</div>
						)}
						<div className="renderer">
							<article className="changelog notebook-editor read-only">
								<section className="ProseMirror">{renderer}</section>
							</article>
						</div>
					</div>
				</div>
			</div>
			{footer}
		</div>
	);
};

export default Entry;
