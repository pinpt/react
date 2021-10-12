import { cancelEvent, StyledTag } from '../../../lib';
import Item from '../Item';
import React from 'react';

export interface ITagBarProps {
	className?: string;
	removable?: boolean;
	onClick?: (tag: string) => void;
	tags: (string | StyledTag)[];
}

const Bar = (props: ITagBarProps) => {
	const { className = '', tags: stringOrStyledTags, onClick, removable } = props;

	return (
		<div className={`Pinpoint Tag Bar ${className}`}>
			{stringOrStyledTags.map((stringOrStyledTag) => {
				if (typeof stringOrStyledTag === 'string') {
					const tag = stringOrStyledTag;
					return (
						<Item
							removable={removable}
							key={tag}
							tag={tag}
							onClick={onClick ? (e) => cancelEvent(e, () => onClick(tag)) : undefined}
						/>
					);
				} else {
					const styledTag = stringOrStyledTag;
					return (
						<Item
							removable={removable}
							key={styledTag.name}
							tag={styledTag.name}
							style={styledTag.style}
							onClick={onClick ? (e) => cancelEvent(e, () => onClick(styledTag.name)) : undefined}
						/>
					);
				}
			})}
		</div>
	);
};

export default Bar;
