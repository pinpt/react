import { ReactElement } from 'react';
import { ISite } from '../../../lib';
import BaseHeader from '../../Header';
import Logo, { ILogoProps } from '../../Logo';
import Search from '../../Search';
import { ISearchBarProps } from '../../Search/Bar';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import ThemeToggle, { IThemeToggleProps } from '../../ThemeToggle';

export interface IPrebuiltHeaderProps {
	className?: string;
	searchTerm?: string;
	site: ISite;
	handleSearch?: (value: string) => void;
	handleSelectHome?: () => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	title?: string;
	description?: string;
	onToggleMenu?: () => void;
	mobileMenu?: boolean;
}

const Header = (props: IPrebuiltHeaderProps) => {
	const {
		className = '',
		searchTerm,
		site,
		handleSearch,
		handleSelectHome,
		renderLogo,
		renderSearch,
		renderSubscribe,
		renderThemeToggle,
		title,
		description,
		onToggleMenu,
		mobileMenu,
	} = props;

	return (
		<BaseHeader
			className={`Prebuilt ${className}`}
			title={title ?? site.theme?.title ?? site.name}
			description={description ?? site.theme?.description ?? site.name}
			onClick={() => handleSelectHome?.()}
			subscribe={renderSubscribe?.(site) ?? <Subscribe className="Prebuilt" href="/subscription/subscribe" />}
			themeToggle={renderThemeToggle?.(site) ?? <ThemeToggle className="Prebuilt" />}
			search={
				renderSearch?.(site) ?? (
					<Search.Bar defaultValue={searchTerm} onSubmit={handleSearch} className="Prebuilt" />
				)
			}
			onToggleMenu={onToggleMenu}
			mobileMenu={mobileMenu}
			logo={
				renderLogo?.(site) ?? (
					<Logo
						src={site.logoUrl}
						className="Prebuilt"
						href={site.theme?.logoLink ?? site.url}
						title="Header Logo Home Page"
					/>
				)
			}
		/>
	);
};

export default Header;
