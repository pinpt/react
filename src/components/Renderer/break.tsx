import { NodeProps, registerNode } from './register';
import React from 'react';
const Break = ({ node }: NodeProps) => {
	return <br />;
};

registerNode('br', (node) => <Break node={node} />);
