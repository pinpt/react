import Item from '../Item';

export interface ITagBarProps {
	className?: string;
	tags: string[];
	onClick?: (tag: string) => void;
}

const Bar = (props: ITagBarProps) => {
	const { className = '', tags, onClick } = props;

	return (
		<div className={`Pinpoint Tag Bar ${className}`}>
			{tags.map((tag) => {
				return <Item key={tag} tag={tag} onClick={onClick ? () => onClick(tag) : undefined} />;
			})}
		</div>
	);
};

export default Bar;
