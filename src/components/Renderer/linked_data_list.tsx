import React from 'react';
import { NodeProps, recurseIntoChildren } from './register';

const LinkedDataList = ({ node }: NodeProps) => {
	return <div className="linked-data-list">{recurseIntoChildren(node)}</div>;
};

export default LinkedDataList;
