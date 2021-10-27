import React from 'react';
import { NodeProps, recurseIntoChildren } from './register';

const LinkedDataNode = ({ node }: NodeProps) => {
	return <>{recurseIntoChildren(node)}</>;
};

export default LinkedDataNode;
