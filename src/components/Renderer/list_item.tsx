import { registerNode, recurseIntoChildren, NodeProps } from './register';
import React from 'react';
const ListItem = ({ node }: NodeProps) => {
	return <li>{recurseIntoChildren(node)}</li>;
};

registerNode('list_item', (node) => <ListItem node={node} />);
