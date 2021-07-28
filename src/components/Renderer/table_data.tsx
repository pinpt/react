import { registerNode, recurseIntoChildren, NodeProps } from './register';

const TableData = ({ node }: NodeProps) => {
	return <td>{recurseIntoChildren(node)}</td>;
};

registerNode('td', (node) => <TableData node={node} />);
