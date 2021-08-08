import { useMemo } from 'react';
import Tags from '../../Tags';

import type { ISearchTerm } from '../../../lib/types';

export interface IQueryProps {
	className?: string;
	terms?: ISearchTerm[];
	onRemoveTerm?: (value: string, clear: boolean) => void;
}

const Query = (props: IQueryProps) => {
	const { className = '', terms = [], onRemoveTerm } = props;

	const tags = useMemo(() => {
		return terms.filter((t) => t.type === 'tag').map((t) => t.value);
	}, [terms]);

	const text = useMemo(() => {
		return terms.find((t) => t.type === 'text')?.value ?? '';
	}, [terms]);

	if (!terms.length) {
		return <></>;
	}
	return (
		<div className={`Pinpoint Search Query ${className}`}>
			<div className="constraint Search Query">
				<h1 className="heading">Filtering Entries by</h1>
				<div className="container">
					<Tags.Bar tags={tags} onClick={(tag) => onRemoveTerm?.(tag, false)} removable />
					{text && <Tags.Item tag={text} noColor removable onClick={() => onRemoveTerm?.(text, true)} />}
				</div>
			</div>
		</div>
	);
};

export default Query;
