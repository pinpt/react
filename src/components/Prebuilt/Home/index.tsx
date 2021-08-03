import { ReactElement } from 'react';
import { IChangelogCardContainerProps } from '../../ChangelogCard/Container';
import Header, { IHeaderProps } from '../../Header';
import Latest, { ILatestProps } from '../../Latest';
import Subscribe, { ISubscribeProps } from '../../Subscribe';
import Card from '../../ChangelogCard';
import { Entry, Site, splitEntries } from '../../../lib';
import Page from '../../Page';
import { IChangelogTitleProps } from '../../ChangelogCard/Title';
import { IChangelogDateProps } from '../../ChangelogCard/Date';
import { IChangelogDescriptionProps } from '../../ChangelogCard/Description';
import { IStatisticsBarProps } from '../../Statistic/Bar';
import { IChangelogReadButtonProps } from '../../ChangelogCard/ReadButton';
import Statistic from '../../Statistic';
import Recent, { IRecentProps } from '../../Recent';

export interface IPrebuiltHomeProps {
	className?: string;
	site: Site;
	entries?: Entry[];
	renderHeader?: (site: Site) => ReactElement<IHeaderProps>;
	renderSubscribe?: (site: Site) => ReactElement<ISubscribeProps>;
	renderLatest?: (entries: Entry[]) => ReactElement<ILatestProps>;
	renderRecent?: (entries: Entry[]) => ReactElement<IRecentProps>;
	renderCard?: (entry: Entry) => ReactElement<IChangelogCardContainerProps>;
	renderCardTitle?: (entry: Entry) => ReactElement<IChangelogTitleProps>;
	renderCardDate?: (entry: Entry) => ReactElement<IChangelogDateProps>;
	renderCardDescription?: (entry: Entry) => ReactElement<IChangelogDescriptionProps>;
	renderCardStatistics?: (entry: Entry) => ReactElement<IStatisticsBarProps>;
	renderCardButton?: (entry: Entry) => ReactElement<IChangelogReadButtonProps>;
	latestCount?: number;
}

const PrebuiltHome = (props: IPrebuiltHomeProps) => {
	const {
		site,
		className = '',
		renderHeader,
		renderSubscribe,
		renderLatest,
		renderRecent,
		entries = [],
		latestCount = 1,
		renderCard,
		renderCardTitle,
		renderCardDate,
		renderCardDescription,
		renderCardStatistics,
		renderCardButton,
	} = props;
	const { latest, recent } = splitEntries(entries, latestCount);
	return (
		<Page.Dashboard
			className={`Prebuilt ${className}`}
			header={
				renderHeader?.(site) ?? (
					<Header
						className="Prebuilt"
						title={`${site.name} Changelog`}
						description={site.theme.description}
						subscribe={
							renderSubscribe?.(site) ?? (
								<Subscribe className="Prebuilt" href={`https://${site.slug}.pinpoint.com/subscribe`} />
							)
						}
					/>
				)
			}
			latest={
				renderLatest?.(latest) ?? (
					<Latest className="Prebuilt">
						{latest.map((entry) => {
							return (
								renderCard?.(entry) ?? (
									<Card.Container
										key={entry.id}
										className="Prebuilt"
										imageUrl={entry.cover_image}
										title={renderCardTitle?.(entry) ?? <Card.Title className="Prebuilt" title={entry.title} />}
										date={renderCardDate?.(entry) ?? <Card.Date className="Prebuilt" ts={entry.publishedAt} />}
										description={
											renderCardDescription?.(entry) ?? (
												<Card.Description className="Prebuilt" description={entry.headline} />
											)
										}
										statistics={
											renderCardStatistics?.(entry) ?? (
												<Statistic.Bar className="Prebuilt" claps={0} views={0} />
											)
										}
										button={renderCardButton?.(entry) ?? <Card.ReadButton className="Prebuilt" />}
									/>
								)
							);
						})}
					</Latest>
				)
			}
			recent={
				renderRecent?.(recent) ?? (
					<Recent className="Prebuilt">
						{recent.map((entry) => {
							return (
								renderCard?.(entry) ?? (
									<Card.Container
										key={entry.id}
										className="Prebuilt"
										imageUrl={entry.cover_image}
										title={renderCardTitle?.(entry) ?? <Card.Title className="Prebuilt" title={entry.title} />}
										date={renderCardDate?.(entry) ?? <Card.Date className="Prebuilt" ts={entry.publishedAt} />}
										description={
											renderCardDescription?.(entry) ?? (
												<Card.Description className="Prebuilt" description={entry.headline} />
											)
										}
										statistics={
											renderCardStatistics?.(entry) ?? (
												<Statistic.Bar className="Prebuilt" claps={0} views={0} />
											)
										}
										button={renderCardButton?.(entry) ?? <Card.ReadButton className="Prebuilt" />}
									/>
								)
							);
						})}
					</Recent>
				)
			}
		/>
	);
};

export default PrebuiltHome;
