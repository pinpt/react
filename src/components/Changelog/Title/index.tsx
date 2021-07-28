export interface IChangelogTitleProps {
	className?: string;
	title: string;
}

const ChangelogTitle = (props: IChangelogTitleProps) => {
	const { className, title } = props;
	return (
		<h2 className={`Changelog Title ${className ?? ''}`}>
			{title}
		</h2>
	);
};

export default ChangelogTitle;
