import ActionLink from '../../Util/ActionLink';

export interface IChangelogReadButtonProps {
	className?: string;
	href?: string;
	newTab?: boolean;
	onClick?: () => void;
}

const ReadButton = (props: IChangelogReadButtonProps) => {
	const { className, href, newTab, onClick } = props;

	return (
		<ActionLink className={`Changelog Card Read ${className ?? ''}`} onClick={onClick} href={href} newTab={newTab}>
			Read
			<svg
				className="arrow"
				width={16}
				height={16}
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M5 12h14"></path>
				<path d="M12 5l7 7-7 7"></path>
			</svg>
		</ActionLink>
	);
};

export default ReadButton;
