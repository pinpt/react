import React from 'react';
import { useCallback, useState } from 'react';
import { getDocumentHeadings, IDocumentHeading } from '../../../lib';
import { IContent } from '../../../lib/types/content';
import { ISite } from '../../../lib/types/site';
import ActionLink from '../../Internal/ActionLink';

export interface IOutlineProps {
	className?: string;
	itemClassName?: string;
	site: ISite;
	entries?: IContent[];
	onClick?: (entry: IContent, anchor?: string) => void;
	active?: string;
	activeAnchor?: string;
}

export interface IOutlineEntryProps extends Omit<IOutlineProps, 'className' | 'entries' | 'active'> {
	entry: IContent;
	isActive: boolean;
	headings: IDocumentHeading[];
	isParentActive: boolean;
}

const Entry = (props: IOutlineEntryProps) => {
	const { itemClassName = '', onClick, activeAnchor = '', entry, isActive, headings, isParentActive } = props;
	const [collapsed, setCollapsed] = useState(true);
	const hasSubMenu = headings.length > 0;
	const isSubMenuOpen = hasSubMenu && !collapsed;

	const handleClickHeading = useCallback(() => {
		setCollapsed(false);
		onClick?.(entry);
	}, [entry, onClick]);

	return (
		<div className="Parent">
			<div className="Top">
				{hasSubMenu ? (
					<>
						{isSubMenuOpen ? (
							<svg
								onClick={() => setCollapsed((c) => !c)}
								aria-hidden="true"
								className="toggleControl"
								focusable="false"
								data-prefix="fas"
								data-icon="chevron-down"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
								></path>
							</svg>
						) : (
							<svg
								onClick={() => setCollapsed((c) => !c)}
								aria-hidden="true"
								className="toggleControl"
								focusable="false"
								data-prefix="fas"
								data-icon="chevron-right"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
							>
								<path
									fill="currentColor"
									d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
								></path>
							</svg>
						)}
					</>
				) : (
					<div className="spacer" />
				)}
				<ActionLink
					className={`Pinpoint Documentation Outline Item ${isActive ? 'active' : ''} ${itemClassName}`}
					onClick={handleClickHeading}
				>
					{entry.title}
				</ActionLink>
			</div>
			{isSubMenuOpen && (
				<div className="SubMenu">
					{headings.map((h) => {
						const anchorActive = isParentActive && activeAnchor === h.id;
						return (
							<ActionLink
								key={h.id}
								onClick={onClick ? () => onClick(entry, h.id) : undefined}
								className={`SubItem ${anchorActive ? 'active' : ''}`}
							>
								{h.title}
							</ActionLink>
						);
					})}
				</div>
			)}
		</div>
	);
};

const Outline = (props: IOutlineProps) => {
	const { className = '', entries, active = '', activeAnchor = '' } = props;

	return (
		<div className={`Pinpoint Documentation Outline Wrapper ${className}`}>
			{entries?.map((entry) => {
				const isParentActive = active === entry.id;
				const isActive = isParentActive && !activeAnchor;
				const headings = getDocumentHeadings(entry.document, entry.title, [1]);
				return (
					<Entry
						key={`outline-${entry.id}`}
						{...props}
						isActive={isActive}
						isParentActive={isParentActive}
						headings={headings}
						entry={entry}
					/>
				);
			})}
		</div>
	);
};

export default Outline;
