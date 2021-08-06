import { getTagColorStyles } from '../../../lib/color';

export interface IItemProps {
	className?: string;
	tag: string;
	onClick?: () => void;
	noColor?: boolean;
	removable?: boolean;
}

const Item = (props: IItemProps) => {
	const { className = '', tag, onClick, noColor, removable } = props;
	const style = getTagColorStyles(tag);

	return (
		<div
			className={`Pinpoint Tag Item ${onClick ? 'Link clickable' : ''} ${noColor ? 'nocolor' : ''} ${className}`}
			onClick={onClick}
			style={noColor ? undefined : style}
		>
			{tag}
			{removable && (
				<span className="icon">
					<svg
						width={7.5}
						height={12}
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="times"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
					>
						<path
							fill="currentColor"
							d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
						></path>
					</svg>
				</span>
			)}
		</div>
	);
};

export default Item;
