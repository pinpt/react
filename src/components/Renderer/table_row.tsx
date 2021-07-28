import { registerNode, recurseIntoChildren, NodeProps } from './register';

const TableRow = ({ node }: NodeProps) => {
	return <tr>{recurseIntoChildren(node)}</tr>;
};

registerNode('tr', (node) => <TableRow node={node} />);
