export interface IChangelogTitleProps {
	className?: string;
	title: string;
}

const Title = (props: IChangelogTitleProps) => {
	const { className, title } = props;
	return <h2 className={`Pinpoint Changelog Card Title ${className ?? ''}`}>{title}</h2>;
};

export default Title;
