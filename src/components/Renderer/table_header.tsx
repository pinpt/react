import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const TableHeader = ({ node }: NodeProps) => {
	return (
		<th>
			<div className="content">{recurseIntoChildren(node)}</div>
		</th>
	);
};

export default TableHeader;
