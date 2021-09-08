import { NodeProps, registerNode } from './register';
import React from 'react';
const Emoji = ({ node }: NodeProps) => {
	return (
		<span className="emoji" data-markup={node.attrs?.markup}>
			{node.attrs?.emoji}
		</span>
	);
};

registerNode('emoji', (node) => <Emoji node={node} />);
