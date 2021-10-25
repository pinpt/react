import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const ListItem = ({ node }: NodeProps) => {
	return <li>{recurseIntoChildren(node)}</li>;
};

export default ListItem;
