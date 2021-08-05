import { ReactElement } from 'react';
import { ISearchBarProps } from '../Search/Bar';
import { ISubscribeProps } from '../Subscribe';
import { IThemeToggleProps } from '../ThemeToggle';

export interface IHeaderProps {
	className?: string;
	title?: string;
	description?: string;
	subscribe?: ReactElement<ISubscribeProps>;
	themeToggle?: ReactElement<IThemeToggleProps>;
	search?: ReactElement<ISearchBarProps>;
}

const Header = (props: IHeaderProps) => {
	const { className = '', title, description, subscribe, themeToggle, search } = props;

	return (
		<div className={`Pinpoint Header ${className}`}>
			<div className="top">
				<div className="left"></div>
				<div className="right">
					{search}
					{themeToggle}
				</div>
			</div>
			<div className="center">
				{title && <h1 className="title">{title}</h1>}
				{description && <div className="description">{description}</div>}
				{subscribe && <div className="action">{subscribe}</div>}
			</div>
		</div>
	);
};

export default Header;
