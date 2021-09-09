import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const OrderedList = ({ node }: NodeProps) => {
	return <ol>{recurseIntoChildren(node)}</ol>;
};

export default OrderedList;
