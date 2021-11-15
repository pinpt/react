import React, { ReactElement } from 'react';
import type { ISite } from '../../../lib/types';
import { PublishedRoadmapResponse } from '../../../lib/types/roadmap';
import { ICopyrightProps } from '../../Copyright';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import { ILogoProps } from '../../Logo';
import RoadmapPage from '../../Page/Roadmap';
import Pinpoint from '../../Pinpoint';
import RoadmapCard from '../../RoadmapCard';
import RoadmapSection from '../../RoadmapSection';
import { ISearchBarProps } from '../../Search/Bar';
import { ISocialMediaBarProps } from '../../SocialMedia/SocialMediaBar';
import { ISubscribeProps } from '../../Subscribe';
import { IThemeToggleProps } from '../../ThemeToggle';
import Footer from '../Footer';
import Header from '../Header';

export interface IPrebuiltRoadmapProps {
	className?: string;
	site: ISite;
	renderNotificationBannerWidget?: (widget: any) => ReactElement;
	renderNotificationPopupWidget?: (widget: any) => ReactElement;
	renderNoficiationModalWidget?: (widget: any) => ReactElement;
	renderMostRecentPostsWidget?: (widget: any) => ReactElement;
	renderHeader?: (site: ISite) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: ISite) => ReactElement<ISubscribeProps>;
	handleSelectHome?: () => void;
	renderLogo?: (site: ISite) => ReactElement<ILogoProps>;
	renderThemeToggle?: (site: ISite) => ReactElement<IThemeToggleProps>;
	renderSearch?: (site: ISite) => ReactElement<ISearchBarProps>;
	renderFooter?: (site: ISite) => ReactElement<IFooterProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	roadmap: PublishedRoadmapResponse;
	renderRoadmap?: (roadmap: PublishedRoadmapResponse, site: ISite) => ReactElement[];
	initialOpen?: boolean;
}

const Roadmap = (props: IPrebuiltRoadmapProps) => {
	const {
		className = '',
		site,
		renderMostRecentPostsWidget,
		renderNoficiationModalWidget,
		renderNotificationPopupWidget,
		renderNotificationBannerWidget,
		renderHeader,
		renderSubscribe,
		handleSelectHome,
		renderLogo,
		renderThemeToggle,
		renderSearch,
		renderCopyright,
		renderFooter,
		renderSocial,
		roadmap,
		renderRoadmap,
		initialOpen,
	} = props;

	return (
		<Pinpoint
			siteId={site.id}
			basePath={site.basePath}
			contentId=""
			renderMostRecentPostsWidget={renderMostRecentPostsWidget}
			renderNoficiationModalWidget={renderNoficiationModalWidget}
			renderNotificationPopupWidget={renderNotificationPopupWidget}
			renderNotificationBannerWidget={renderNotificationBannerWidget}
		>
			{(_ready, ref) => (
				<RoadmapPage
					className={`Prebuilt ${className}`}
					ref={ref}
					header={
						renderHeader?.(site) ?? (
							<Header
								site={site}
								handleSelectHome={handleSelectHome}
								renderLogo={renderLogo}
								renderSearch={renderSearch}
								renderSubscribe={renderSubscribe}
								renderThemeToggle={renderThemeToggle}
							/>
						)
					}
					sections={
						renderRoadmap?.(roadmap, site) ??
						roadmap.columns?.map((column) => {
							return (
								<RoadmapSection
									key={column.id}
									title={column.title}
									description={column.description}
									initialOpen={initialOpen}
								>
									{roadmap.board[column.id].map((item: any) => {
										return (
											<RoadmapCard title={item.title} description={item.description} key={item.id}>
												{item.children.map((child: any) => {
													return <div key={child.id}>{child.title}</div>;
												})}
											</RoadmapCard>
										);
									})}
								</RoadmapSection>
							);
						})
					}
					footer={
						renderFooter?.(site) ?? (
							<Footer
								site={site}
								renderCopyright={renderCopyright}
								renderLogo={renderLogo}
								renderSocial={renderSocial}
								renderSubscribe={renderSubscribe}
							/>
						)
					}
				/>
			)}
		</Pinpoint>
	);
};

export default Roadmap;
