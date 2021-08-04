export interface IAuthorProps {
	className?: string;
	avatarUrl: string;
	name?: string;
}

const Author = (props: IAuthorProps) => {
	const { className = '', avatarUrl, name } = props;

	return (
		<div className={`Pinpoint Author ${className}`}>
			<img className="avatar" src={avatarUrl} />
			<span className="name">{name}</span>
		</div>
	);
};

export default Author;
