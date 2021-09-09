import { recurseIntoChildren, NodeProps } from './register';
import React from 'react';

const BulletList = ({ node }: NodeProps) => {
	return <ul>{recurseIntoChildren(node)}</ul>;
};

export default BulletList;
