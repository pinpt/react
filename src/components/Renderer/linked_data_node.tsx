import { NodeProps, recurseIntoChildren, registerNode } from './register';
import React from 'react';
const LinkedDataNode = ({ node }: NodeProps) => {
	return <>{recurseIntoChildren(node)}</>;
};

registerNode('linked_data_node', (node) => <LinkedDataNode node={node} />);
