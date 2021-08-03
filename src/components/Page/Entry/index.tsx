import { ReactElement } from 'react';
import { IHeaderProps } from '../../Header';

export interface IPageEntryProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	renderer?: ReactElement;
	coverImage?: string;
}

const PageEntry = (props: IPageEntryProps) => {
	const { className = '', header, renderer, coverImage } = props;

	return (
		<div className={`Pinpoint Page Entry ${className}`}>
			{header}
			<div className="body">
				<div className="sidebar">Sidebar</div>
				<div className="content">
					{coverImage && (
						<div className="cover">
							<img src={coverImage} />
						</div>
					)}
					<div className="renderer">{renderer}</div>
				</div>
			</div>
		</div>
	);
};

export default PageEntry;
