import { registerNode, recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const TableRow = ({ node }: NodeProps) => {
	return <tr>{recurseIntoChildren(node)}</tr>;
};

registerNode('tr', (node) => <TableRow node={node} />);
