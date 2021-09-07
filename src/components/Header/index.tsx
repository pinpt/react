import { ReactElement } from 'react';

import type { IActionLinkProps } from '../Internal/ActionLink';

import type { ISearchBarProps } from '../Search/Bar';
import type { ISubscribeProps } from '../Subscribe';
import type { IThemeToggleProps } from '../ThemeToggle';
import type { ILogoProps } from '../Logo';
import ActionLink from '../Internal/ActionLink';
import MobileMenuTrigger from '../Internal/MobileMenuTrigger';

export interface IHeaderProps {
	className?: string;
	logo?: ReactElement<ILogoProps | IActionLinkProps>;
	title?: string;
	description?: string;
	subscribe?: ReactElement<ISubscribeProps>;
	themeToggle?: ReactElement<IThemeToggleProps>;
	search?: ReactElement<ISearchBarProps>;
	href?: string;
	onClick?: () => void;
	onToggleMenu?: () => void;
	mobileMenu?: boolean;
}

const Header = (props: IHeaderProps) => {
	const {
		className = '',
		title,
		description,
		subscribe,
		themeToggle,
		search,
		logo,
		href,
		onClick,
		onToggleMenu,
		mobileMenu,
	} = props;

	return (
		<div className={`Pinpoint Header ${className}`}>
			<div className="top">
				<div className="left">
					<MobileMenuTrigger visible={mobileMenu} toggle={onToggleMenu} />
					{logo}
				</div>
				<div className="right">
					{search}
					{themeToggle}
				</div>
			</div>
			<div className="center">
				{title && (
					<a href={href} title={title} onClick={onClick} className={href || onClick ? 'link' : undefined}>
						<h1 className="title">{title}</h1>
					</a>
				)}
				{description && <div className="description">{description}</div>}
				{subscribe && <div className="action">{subscribe}</div>}
			</div>
		</div>
	);
};

export default Header;
