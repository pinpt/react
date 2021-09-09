import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const ListItem = ({ node }: NodeProps) => {
	return <li>{recurseIntoChildren(node)}</li>;
};

export default ListItem;
