export interface ILogoProps {
	className?: string;
	src: string;
	href?: string;
	newTab?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	onClick?: () => void;
}

const Logo = (props: ILogoProps) => {
	const { className = '', src, href, newTab, size = 'sm', onClick } = props;

	const img = <img className="image" src={src} />;

	if (href) {
		return (
			<a
				className={`Pinpoint Logo ${size} ${className}`}
				href={href}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
			>
				{img}
			</a>
		);
	}

	return (
		<span className={`Pinpoint Logo ${size} ${onClick ? 'clickable' : ''} ${className}`} onClick={onClick}>
			{img}
		</span>
	);
};

export default Logo;
