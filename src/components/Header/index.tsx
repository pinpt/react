import { ReactElement } from 'react';

import type { IActionLinkProps } from '../Internal/ActionLink';

import type { ISearchBarProps } from '../Search/Bar';
import type { ISubscribeProps } from '../Subscribe';
import type { IThemeToggleProps } from '../ThemeToggle';
import type { ILogoProps } from '../Logo';

export interface IHeaderProps {
	className?: string;
	logo?: ReactElement<ILogoProps | IActionLinkProps>;
	title?: string;
	description?: string;
	subscribe?: ReactElement<ISubscribeProps>;
	themeToggle?: ReactElement<IThemeToggleProps>;
	search?: ReactElement<ISearchBarProps>;
}

const Header = (props: IHeaderProps) => {
	const { className = '', title, description, subscribe, themeToggle, search, logo } = props;

	return (
		<div className={`Pinpoint Header ${className}`}>
			<div className="top">
				<div className="left">{logo}</div>
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
