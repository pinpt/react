import ActionLink from '../Internal/ActionLink';

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

	return (
		<ActionLink className={`Logo ${size} ${className}`} href={href} newTab={newTab} onClick={onClick}>
			<img className="image" src={src} />
		</ActionLink>
	);
};

export default Logo;
