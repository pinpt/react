import React, { forwardRef, ReactElement } from 'react';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import withWrapper from '../../Internal/withWrapper';
import { PublishedRoadmapResponse } from '../../../lib/types/roadmap';
import RoadmapCard from '../../RoadmapCard';
import RoadmapSection, { IRoadmapSectionProps } from '../../RoadmapSection';

export interface IRoadmapPageProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	sections?: ReactElement<IRoadmapSectionProps>[];
	footer?: ReactElement<IFooterProps>;
}

const baseClass = 'Pinpoint Page Roadmap';

const Roadmap = forwardRef((props: IRoadmapPageProps, ref: any) => {
	const { className = '', header, sections, footer } = props;
	return (
		<div className={`${baseClass} Wrapper ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			<div className={`${baseClass} List`}>
				{withWrapper(sections, 'sections')}
			</div>
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default Roadmap;
