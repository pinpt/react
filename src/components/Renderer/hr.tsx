import { NodeProps, registerNode } from './register';
import React from 'react';
const Hr = ({ node }: NodeProps) => {
	return (
		<div className="hr">
			<div>
				<hr />
			</div>
		</div>
	);
};

registerNode('hr', (node) => <Hr node={node} />);
