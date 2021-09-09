import { cancelEvent } from '../../../lib';
import Item from '../Item';
import React from 'react';

export interface ITagBarProps {
	className?: string;
	removable?: boolean;
	tags: string[];
	onClick?: (tag: string) => void;
}

const Bar = (props: ITagBarProps) => {
	const { className = '', tags, onClick, removable } = props;

	return (
		<div className={`Pinpoint Tag Bar ${className}`}>
			{tags.map((tag) => {
				return (
					<Item
						removable={removable}
						key={tag}
						tag={tag}
						onClick={onClick ? (e) => cancelEvent(e, () => onClick(tag)) : undefined}
					/>
				);
			})}
		</div>
	);
};

export default Bar;
