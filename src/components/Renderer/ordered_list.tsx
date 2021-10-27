import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const OrderedList = ({ node }: NodeProps) => {
	return <ol>{recurseIntoChildren(node)}</ol>;
};

export default OrderedList;
