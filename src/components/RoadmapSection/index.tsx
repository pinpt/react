import { useCallback, useState } from 'react';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IRoadmapSectionProps {
	className?: string;
	title: string;
	description?: string;
	initialOpen?: boolean;
	children?: any;
	emptyMessage?: string;
}

const baseClass = `Pinpoint RoadmapSection`;

const RoadmapSection = (props: IRoadmapSectionProps) => {
	const {
		className = '',
		initialOpen = true,
		title,
		children,
		description,
		emptyMessage = 'There are currently no items in this stage on the roadmap.',
	} = props;
	const [isOpen, setIsOpen] = useState(initialOpen);

	const toggleOpen = useCallback(() => {
		setIsOpen((o) => !o);
	}, []);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Title`}>
				<FontAwesomeIcon
					className={`${baseClass} Icon`}
					icon={isOpen ? faChevronDown : faChevronRight}
					onClick={toggleOpen}
					fixedWidth
				/>
				{title}
			</div>
			{description && <div className={`${baseClass} Description`}>{description}</div>}
			{isOpen && (
				<div className={`${baseClass} Children`}>
					{Array.from(children ?? []).length === 0 ? (
						<div className={`${baseClass} Empty`}>{emptyMessage}</div>
					) : (
						children
					)}
				</div>
			)}
		</div>
	);
};

export default RoadmapSection;
