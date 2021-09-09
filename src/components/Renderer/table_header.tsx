import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const TableHeader = ({ node }: NodeProps) => {
	return (
		<th>
			<div className="content">{recurseIntoChildren(node)}</div>
		</th>
	);
};

export default TableHeader;
