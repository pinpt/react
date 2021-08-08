export interface IAuthorProps {
	className?: string;
	avatarUrl: string;
	name?: string;
	href?: string;
}

const Author = (props: IAuthorProps) => {
	const { className = '', avatarUrl, name = '', href } = props;

	return (
		<div className={`Pinpoint Author ${className}`}>
			<a title={`${name} avatar`} href={href}>
				<img className="avatar" src={avatarUrl} />
				<span className="name">{name}</span>
			</a>
		</div>
	);
};

export default Author;
