import { registerNode, recurseIntoChildren, NodeProps } from './register';
import React from 'react';
const BlockQuote = ({ node }: NodeProps) => {
	return <blockquote>{recurseIntoChildren(node)}</blockquote>;
};

registerNode('blockquote', (node) => <BlockQuote node={node} />);
