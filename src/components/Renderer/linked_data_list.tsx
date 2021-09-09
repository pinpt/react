import { NodeProps, recurseIntoChildren } from './register';
import React from 'react';

const LinkedDataList = ({ node }: NodeProps) => {
	return <div className="linked-data-list">{recurseIntoChildren(node)}</div>;
};

export default LinkedDataList;
