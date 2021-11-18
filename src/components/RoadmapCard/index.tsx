import React from 'react';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DateLabel from '../DateLabel';
import Vote from '../Vote';

export interface IRoadmapCardProps {
	className?: string;
	title: string;
	description?: string;
	children?: any;
	dueDate?: number;
	selectedVote: number;
	setSelectedVote: (value: number) => void;
}

const baseClass = `Pinpoint RoadmapCard`;

const RoadmapCard = (props: IRoadmapCardProps) => {
	const { className = '', title, description, children, dueDate = -1, selectedVote, setSelectedVote } = props;

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Heading`}>
				<div className={`${baseClass} Top`}>
					<div className={`${baseClass} Title`}>{title}</div>
					{dueDate > 0 && (
						<div className={`${baseClass} DueDate`}>
							<FontAwesomeIcon icon={faCalendarAlt} />
							<DateLabel ts={dueDate} />
						</div>
					)}
				</div>
				{description && <div className={`${baseClass} Description`}>{description}</div>}
			</div>
			<div className={`${baseClass} Body`}>{children}</div>
			<div className={`${baseClass} Actions`}>
				<div className={`${baseClass} VoteButton`}>
					<Vote selected={selectedVote} setSelected={setSelectedVote} />
				</div>
			</div>
		</div>
	);
};

export default RoadmapCard;
