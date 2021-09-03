export interface IDocumentationCardProps {
	className?: string;
	title?: string | React.ReactElement;
	description?: string | React.ReactElement;
	cta?: string | React.ReactElement;
	onCtaClick?: () => void;
}

const Card = (props: IDocumentationCardProps) => {
	const {
		className = '',
		title,
		description,
		cta = 'Read',
		onCtaClick
	} = props;

	return (
		<div className={`Pinpoint Documentation Card Container wrapper ${className}`}>
			{title && (
				<h2 className="title">
					{title}
				</h2>
			)}
			{description && (
				<p className="description">
					{description}
				</p>
			)}
			{onCtaClick && (
				<div className="cta clickable" onClick={onCtaClick}>
					{cta}
				</div>
			)}
		</div>
	);
}

export default Card;