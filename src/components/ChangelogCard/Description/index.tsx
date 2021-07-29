export interface IChangelogDescriptionProps {
	className?: string;
	description: string;
}

const Description = (props: IChangelogDescriptionProps) => {
	const { className, description } = props;
	return <p className={`Pinpoint Changelog Card Description ${className ?? ''}`}>{description}</p>;
};

export default Description;
