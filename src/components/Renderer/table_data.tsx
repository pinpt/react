import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const TableData = ({ node }: NodeProps) => {
	return <td>{recurseIntoChildren(node)}</td>;
};

export default TableData;
