import { ReactElement } from 'react';
import { ISubscribeProps } from '../Subscribe';

export interface IHeaderProps {
	className?: string;
	title?: string;
	description?: string;
	subscribe?: ReactElement<ISubscribeProps>;
}

const Header = (props: IHeaderProps) => {
	const { className = '', title, description, subscribe } = props;

	return (
		<div className={`Pinpoint Header ${className}`}>
			<div className="left"></div>
			<div className="center">
				{title && <h1 className="title">{title}</h1>}
				{description && <div className="description">{description}</div>}
				{subscribe && <div className="action">{subscribe}</div>}
			</div>
			<div className="right"></div>
		</div>
	);
};

export default Header;
