import React, { ReactElement } from 'react';
import { feedbackTitleFromSite } from '../../../lib/data/feedback';
import { configFromSite } from '../../../lib/data/site';
import { PublishedRoadmapResponse } from '../../../lib/types/roadmap';
import Feedback from '../../../widgets/Feedback';
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

import type { ISite } from '../../../lib/types';
import type { IFeedbackProps } from '../../../lib/types/feedback';
const pageUrl = typeof window === 'undefined' ? '' : window.location.href;
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
	renderFeedback?: (site: ISite) => ReactElement<IFeedbackProps>;
	renderSocial?: (site: ISite) => ReactElement<ISocialMediaBarProps>;
	renderCopyright?: (site: ISite) => ReactElement<ICopyrightProps>;
	roadmap: PublishedRoadmapResponse;
	renderRoadmap?: (roadmap: PublishedRoadmapResponse, site: ISite) => ReactElement[];
	initialOpen?: boolean;
	handleVote?: (id: string, vote: number, email?: string) => any;
	userVotes?: Record<string, number>;
	enableVoting?: boolean;
	totalVotes?: Record<string, number>;
	fetching?: boolean;
	loadingVotes?: Record<string, boolean>;
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
		renderFeedback,
		renderSocial,
		roadmap,
		renderRoadmap,
		initialOpen,
		userVotes,
		handleVote,
		enableVoting = false,
		totalVotes,
		fetching = false,
		loadingVotes,
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
								title={roadmap.title}
								description={roadmap.description}
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
											<RoadmapCard
												title={item.title}
												description={item.description}
												dueDate={item.dueDate}
												key={item.id}
												selectedVote={userVotes?.[item.id] ?? -1}
												enableVoting={enableVoting}
												setSelectedVote={(value) => handleVote?.(item.id, value)}
												onSubmitNewSubscriber={(email, value) => handleVote?.(item.id, value, email)}
												totalVotes={totalVotes?.[item.id] ?? 0}
												loading={fetching || (loadingVotes?.[item.id] ?? false)}
											>
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
					feedback={
						site.features?.feedback
							? renderFeedback?.(site) ?? (
									<Feedback
										config={configFromSite(site)}
										title={feedbackTitleFromSite(site)}
										pageTitle={roadmap.title}
										url={pageUrl}
										pageType={site.type as any}
									/>
							  )
							: undefined
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
