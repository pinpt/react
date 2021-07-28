import { NodeProps, registerNode } from './register';

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
