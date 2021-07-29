export interface IChangelogReadButtonProps {
	className?: string;
	href?: string;
	newTab?: boolean;
	onClick?: () => void;
}

const Icon = (
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
);

const ChangelogReadButton = (props: IChangelogReadButtonProps) => {
	const { className, href, newTab, onClick } = props;

	if (href) {
		return (
			<a
				className={`Pinpoint Changelog Card Read ${className ?? ''}`}
				href={href}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
			>
				Read
				{Icon}
			</a>
		);
	}
	return (
		<span className={`Pinpoint Changelog Card Read ${className ?? ''}`} onClick={onClick}>
			Read
			{Icon}
		</span>
	);
};

export default ChangelogReadButton;
