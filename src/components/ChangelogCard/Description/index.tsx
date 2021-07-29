export interface IChangelogDescriptionProps {
	className?: string;
	description: string;
}

const ChangelogDescription = (props: IChangelogDescriptionProps) => {
	const { className, description } = props;
	return (
		<p className={`Pinpoint Changelog Card Description ${className ?? ''}`}>
			{description}
		</p>
	);
};

export default ChangelogDescription;
