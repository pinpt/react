import { ReactElement } from 'react';
import { IAuthorProps } from '../Author';
import { IDateProps } from '../DateLabel';
import { IClapProps } from '../Clap';
import { ISocialMediaBarProps } from '../SocialMedia/SocialMediaBar';
import { ITagBarProps } from '../Tags/Bar';
import React from 'react';

export interface ISidebarProps {
	className?: string;
	date?: ReactElement<IDateProps>;
	author?: ReactElement<IAuthorProps>;
	tags?: ReactElement<ITagBarProps>;
	clap?: ReactElement<IClapProps>;
	sharing?: ReactElement<ISocialMediaBarProps>;
}

const Sidebar = (props: ISidebarProps) => {
	const { className = '', date, author, tags, clap, sharing } = props;

	return (
		<div className={`Pinpoint Sidebar ${className}`}>
			{date}
			{author}
			{tags}
			{clap}
			{sharing}
		</div>
	);
};

export default Sidebar;
