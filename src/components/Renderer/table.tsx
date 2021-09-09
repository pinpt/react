import { recurseIntoChildren, NodeProps, PmNode } from './register';
import React from 'react';

const getTableWidth = (node: PmNode) => {
	if (node.content?.[0]?.content) {
		return node.content[0].content.reduce((acc, th) => {
			if (th.attrs?.width) {
				return acc + th.attrs.width;
			}
			return acc;
		}, 0);
	}
	return undefined;
};

const Table = ({ node }: NodeProps) => {
	const { columnWidthMode } = node.attrs;
	const style: any = {};
	if (columnWidthMode === 'manual') {
		const width = getTableWidth(node);
		if (width) {
			style.width = width;
		}
	}
	return (
		<div className="scrollable-wrapper">
			<div className="scrollable">
				<table className={`table-${columnWidthMode}`} style={style}>
					<tbody>{recurseIntoChildren(node)}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
