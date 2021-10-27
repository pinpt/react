import React from 'react';
import { recurseIntoChildren, NodeProps } from './register';

const BulletList = ({ node }: NodeProps) => {
	return <ul>{recurseIntoChildren(node)}</ul>;
};

export default BulletList;
