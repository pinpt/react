import { registerNode, recurseIntoChildren, NodeProps } from './register';
import React from 'react';
const BulletList = ({ node }: NodeProps) => {
	return <ul>{recurseIntoChildren(node)}</ul>;
};

registerNode('bullet_list', (node) => <BulletList node={node} />);
