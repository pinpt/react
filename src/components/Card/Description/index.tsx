export interface ICardDescriptionProps {
	className?: string;
	description: string;
}

const Description = (props: ICardDescriptionProps) => {
	const { className, description } = props;
	return <p className={`Pinpoint Content Card Description ${className ?? ''}`}>{description}</p>;
};

export default Description;
