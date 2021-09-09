import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const TableRow = ({ node }: NodeProps) => {
	return <tr>{recurseIntoChildren(node)}</tr>;
};

export default TableRow;
