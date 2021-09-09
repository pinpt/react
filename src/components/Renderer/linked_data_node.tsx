import { NodeProps, recurseIntoChildren } from './register';
import React from 'react';

const LinkedDataNode = ({ node }: NodeProps) => {
	return <>{recurseIntoChildren(node)}</>;
};

export default LinkedDataNode;
