import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const TableRow = ({ node }: NodeProps) => {
	return <tr>{recurseIntoChildren(node)}</tr>;
};

export default TableRow;
