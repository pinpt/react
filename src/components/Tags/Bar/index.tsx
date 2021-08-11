import React, { useCallback } from 'react';
import Item from '../Item';

export interface ITagBarProps {
	className?: string;
	removable?: boolean;
	tags: string[];
	onClick?: (tag: string) => void;
}

const Bar = (props: ITagBarProps) => {
	const { className = '', tags, onClick, removable } = props;

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>, tag: string) => {
			event.preventDefault();
			event.stopPropagation();
			onClick?.(tag);
			return false;
		},
		[onClick]
	);

	return (
		<div className={`Pinpoint Tag Bar ${className}`}>
			{tags.map((tag) => {
				return (
					<Item
						removable={removable}
						key={tag}
						tag={tag}
						onClick={onClick ? (e) => handleClick(e, tag) : undefined}
					/>
				);
			})}
		</div>
	);
};

export default Bar;
