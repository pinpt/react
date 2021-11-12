export interface IRoadmapCardProps {
	className?: string;
	title: string;
	description?: string;
	children?: any;
}

const baseClass = `Pinpoint RoadmapCard`;

const RoadmapCard = (props: IRoadmapCardProps) => {
	const { className = '', title, description, children } = props;

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Heading`}>
				<div className={`${baseClass} Title`}>{title}</div>
				{description && <div className={`${baseClass} Description`}>{description}</div>}
			</div>
			<div className={`${baseClass} Body`}>{children}</div>
		</div>
	);
};

export default RoadmapCard;
