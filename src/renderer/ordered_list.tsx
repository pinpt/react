import { registerNode, recurseIntoChildren, NodeProps } from './register';

const OrderedList = ({ node }: NodeProps) => {
	return <ol>{recurseIntoChildren(node)}</ol>;
};

registerNode('ordered_list', (node) => <OrderedList node={node} />);
