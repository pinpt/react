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

const PageEntry = (props: IPageEntryProps) => {
	const { className = '', header, renderer, coverImage, sidebar, footer } = props;

	return (
		<div className={`Pinpoint Page Entry ${className}`}>
			{header}
			<div className="body">
				<div className="sidebar">{sidebar}</div>
				<div className="content">
					{coverImage && (
						<div className="cover">
							<img src={coverImage} />
						</div>
					)}
					<div className="renderer">{renderer}</div>
				</div>
			</div>
			{footer}
		</div>
	);
};

export default PageEntry;
