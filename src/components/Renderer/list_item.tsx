import { registerNode, recurseIntoChildren, NodeProps } from './register';

const ListItem = ({ node }: NodeProps) => {
	return <li>{recurseIntoChildren(node)}</li>;
};

registerNode('list_item', (node) => <ListItem node={node} />);
