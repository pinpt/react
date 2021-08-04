import { ReactElement } from 'react';
import { IAuthorProps } from '../Author';
import { IClapProps } from '../Clap';
import { ITagBarProps } from '../Tags/Bar';

export interface ISidebarProps {
	className?: string;
	author?: ReactElement<IAuthorProps>;
	tags?: ReactElement<ITagBarProps>;
	clap?: ReactElement<IClapProps>;
}

const Sidebar = (props: ISidebarProps) => {
	const { className = '', author, tags, clap } = props;

	return (
		<div className={`Pinpoint Sidebar ${className}`}>
			{author}
			{tags}
			{clap}
		</div>
	);
};

export default Sidebar;
