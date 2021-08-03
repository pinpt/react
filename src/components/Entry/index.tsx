import { ReactElement } from 'react';
import { IHeaderProps } from '../Header';

export interface IEntryProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	renderer?: ReactElement;
	coverImage?: string;
}

const Entry = (props: IEntryProps) => {
	const { className = '', header, renderer, coverImage } = props;

	return (
		<div className={`Pinpoint Entry ${className}`}>
			{header}
			<div className="body">
				<div className="sidebar">
					Sidebar
				</div>
				<div className="content">
					{coverImage && (
						<div className="cover">
							<img src={coverImage} />
						</div>
					)}
					<div className="renderer">
						{renderer}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Entry;
