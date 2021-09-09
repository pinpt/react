import { NodeProps } from './register';
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

export default Hr;
