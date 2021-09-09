import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';
const BlockQuote = ({ node }: NodeProps) => {
	return <blockquote>{recurseIntoChildren(node)}</blockquote>;
};

export default BlockQuote;
