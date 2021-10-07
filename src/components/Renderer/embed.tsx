import React from 'react';
import { NodeProps, PmNode } from './register';

const Embed = ({ node }: NodeProps) => {
	return (
		<div className={`node embed`}>
			<iframe
				height={node.attrs?.height}
				src={node.attrs?.href}
				allowFullScreen={node.attrs?.allowfullscreen}
				allow={node.attrs?.allow}
				name={node.attrs?.name}
				referrerPolicy={node.attrs?.referrerpolicy}
			></iframe>
		</div>
	);
};

export default Embed;
