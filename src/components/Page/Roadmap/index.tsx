import React, { forwardRef } from 'react';
import { PublishedRoadmapResponse } from '../../../lib/types/roadmap';
import RoadmapCard from '../../RoadmapCard';
import RoadmapSection from '../../RoadmapSection';

export interface IRoadmapPageProps {
	className?: string;
	roadmap: PublishedRoadmapResponse;
	defaultOpen?: boolean;
}

const baseClass = 'Pinpoint Page Roadmap';

const Roadmap = forwardRef((props: IRoadmapPageProps, ref: any) => {
	const { className = '', roadmap, defaultOpen } = props;
	return (
		<div className={`${baseClass} Wrapper ${className}`} ref={ref}>
			<div className={`${baseClass} List`}>
				{roadmap.columns?.map((column) => {
					return (
						<RoadmapSection
							key={column.id}
							title={column.title}
							description={column.description}
							initialOpen={defaultOpen ?? true}
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
				})}
			</div>
		</div>
	);
});

export default Roadmap;
