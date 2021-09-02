import Logo from '../../Logo';
import { ISite } from '../../../lib';

export interface IDocoumentationTitleProps {
	className?: string;
	site?: ISite;
	text?: string;
}

const Title = (props: IDocoumentationTitleProps) => {
	const { className = '', site, text } = props;
	return (
		<div className={`Pinpoint Documentation Title ${className}`}>
			{site && <Logo src={site.logoUrl} />}
			<div className="text">{text ? text : site?.name}</div>
		</div>
	);
};

export default Title;
