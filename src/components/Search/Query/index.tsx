import { useMemo } from 'react';
import React from 'react';
import { getTagColorStyles } from '../../../lib';
import type { StyledTag, ISearchTerm, TagMapping } from '../../../lib/types';
import Tags from '../../Tags';

export interface IQueryProps {
	className?: string;
	terms?: ISearchTerm[];
	tagMapping?: TagMapping;
	onRemoveTerm?: (value: string, clear: boolean) => void;
}

const Query = (props: IQueryProps) => {
	const { className = '', terms = [], onRemoveTerm, tagMapping } = props;

	const tags = useMemo(() => {
		return terms
			.filter((t) => t.type === 'tag')
			.map<StyledTag>((t) => ({
				name: t.value,
				style: {
					...getTagColorStyles(t.value, undefined, tagMapping),
				},
			}));
	}, [terms]);

	const text = useMemo(() => {
		return terms.find((t) => t.type === 'text')?.value ?? '';
	}, [terms]);

	if (!terms.length) {
		return <></>;
	}
	return (
		<div className={`Pinpoint Search Query ${className}`}>
			<h1 className="heading">Filtering Entries by</h1>
			<div className="query">
				<Tags.Bar tags={tags} onClick={(tag) => onRemoveTerm?.(tag, false)} removable />
				{text && <Tags.Item tag={text} noColor removable onClick={() => onRemoveTerm?.(text, true)} />}
			</div>
		</div>
	);
};

export default Query;
