import ActionLink from '../../Internal/ActionLink';
import { IContent } from '../../../lib/types/content';
import { ISite } from '../../../lib/types/site';

export interface IOutlineProps {
	className?: string;
	itemClassName?: string;
	site: ISite;
	entries?: IContent[];
	href?: (entry?: IContent) => string;
	newTab?: boolean;
	onClick?: (entry: IContent) => void;
	active?: string;
}

const Outline = (props: IOutlineProps) => {
	const { className = '', entries, itemClassName = '', onClick, href, newTab, active = '' } = props;
	return (
		<div className={`Pinpoint Documentation Outline Wrapper ${className}`}>
			{entries?.map((entry) => {
				const isActive = active === entry.id;
				return (
					<ActionLink
						key={`outline-${entry.id}`}
						className={`Pinpoint Documentation Outline Item ${isActive ? 'active' : ''} ${itemClassName}`}
						onClick={onClick && !isActive ? () => onClick(entry) : undefined}
						href={!isActive ? href?.(entry) : undefined}
						newTab={newTab}
					>
						{entry.title}
					</ActionLink>
				);
			})}
		</div>
	);
};

export default Outline;
