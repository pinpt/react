import React from 'react';
import { NodeProps, recurseIntoChildren } from './register';

const LinkedDataListItem = ({ node }: NodeProps) => {
	return <div className="linked-data-list-item">{recurseIntoChildren(node)}</div>;
};

export default LinkedDataListItem;
