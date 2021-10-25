import React from 'react';
import { NodeProps } from './register';

const Emoji = ({ node }: NodeProps) => {
	return (
		<span className="emoji" data-markup={node.attrs?.markup}>
			{node.attrs?.emoji}
		</span>
	);
};

export default Emoji;
