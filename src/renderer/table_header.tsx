import { registerNode, recurseIntoChildren, NodeProps } from './register';

const TableHeader = ({ node }: NodeProps) => {
	return (
		<th>
			<div className="content">{recurseIntoChildren(node)}</div>
		</th>
	);
};

registerNode('th', (node) => <TableHeader node={node} />);
