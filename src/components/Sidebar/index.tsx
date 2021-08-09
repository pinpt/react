import { ReactElement } from 'react';
import { IAuthorProps } from '../Author';
import { IClapProps } from '../Clap';
import { ISocialBarProps } from '../Social/Bar';
import { ITagBarProps } from '../Tags/Bar';

export interface ISidebarProps {
	className?: string;
	author?: ReactElement<IAuthorProps>;
	tags?: ReactElement<ITagBarProps>;
	clap?: ReactElement<IClapProps>;
	sharing?: ReactElement<ISocialBarProps>;
}

const Sidebar = (props: ISidebarProps) => {
	const { className = '', author, tags, clap, sharing } = props;

	return (
		<div className={`Pinpoint Sidebar ${className}`}>
			{author}
			{tags}
			{clap}
			{sharing}
		</div>
	);
};

export default Sidebar;
