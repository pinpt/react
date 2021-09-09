import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const TableData = ({ node }: NodeProps) => {
	return <td>{recurseIntoChildren(node)}</td>;
};

export default TableData;
