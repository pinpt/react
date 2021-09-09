import { NodeProps, recurseIntoChildren } from './register';
import React from 'react';

const LinkedDataListItem = ({ node }: NodeProps) => {
	return <div className="linked-data-list-item">{recurseIntoChildren(node)}</div>;
};

export default LinkedDataListItem;
