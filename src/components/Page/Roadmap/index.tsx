import React, { forwardRef, ReactElement } from 'react';
import { IFooterProps } from '../../Footer';
import { IHeaderProps } from '../../Header';
import withWrapper from '../../Internal/withWrapper';

import type { IFeedbackProps } from '../../../lib/types/feedback';
import type { IRoadmapSectionProps } from '../../RoadmapSection';

export interface IRoadmapPageProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	sections?: ReactElement<IRoadmapSectionProps>[];
	footer?: ReactElement<IFooterProps>;
	feedback?: ReactElement<IFeedbackProps>;
}

const baseClass = 'Pinpoint Page Roadmap';

const Roadmap = forwardRef((props: IRoadmapPageProps, ref: any) => {
	const { className = '', header, sections, feedback, footer } = props;
	return (
		<div className={`${baseClass} Wrapper ${className}`} ref={ref}>
			{withWrapper(header, 'header')}
			<div className={`${baseClass} List`}>{withWrapper(sections, 'sections')}</div>
			{feedback && withWrapper(feedback, 'feedback')}
			{withWrapper(footer, 'footer')}
		</div>
	);
});

export default Roadmap;
