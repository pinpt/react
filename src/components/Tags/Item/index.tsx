import { getTagColorStyles } from '../../../lib/color';

export interface IItemProps {
	className?: string;
	tag: string;
	onClick?: () => void;
}

const Item = (props: IItemProps) => {
	const { className = '', tag, onClick } = props;
	const style = getTagColorStyles(tag);

	return (
		<div
			className={`Pinpoint Tag Item ${onClick ? 'Link clickable' : ''} ${className}`}
			onClick={onClick}
			style={style}
		>
			{tag}
		</div>
	);
};

export default Item;
