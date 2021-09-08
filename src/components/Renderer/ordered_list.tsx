import { registerNode, recurseIntoChildren, NodeProps } from './register';
import React from 'react';
const OrderedList = ({ node }: NodeProps) => {
	return <ol>{recurseIntoChildren(node)}</ol>;
};

registerNode('ordered_list', (node) => <OrderedList node={node} />);
