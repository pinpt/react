import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const BlockQuote = ({ node }: NodeProps) => {
	return <blockquote>{recurseIntoChildren(node)}</blockquote>;
};

export default BlockQuote;
