import { NodeProps, recurseIntoChildren, registerNode } from './register';
import React from 'react';
const LinkedDataList = ({ node }: NodeProps) => {
	return <div className="linked-data-list">{recurseIntoChildren(node)}</div>;
};

registerNode('linked_data_list', (node) => <LinkedDataList node={node} />);
