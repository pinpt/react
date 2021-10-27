import { ReactElement } from 'react';
import React from 'react';
import { IAuthorProps } from '../Author';
import { IClapProps } from '../Clap';
import { IDateProps } from '../DateLabel';
import { ISocialMediaBarProps } from '../SocialMedia/SocialMediaBar';
import { ITagBarProps } from '../Tags/Bar';

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
