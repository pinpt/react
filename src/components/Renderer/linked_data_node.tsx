import { NodeProps, recurseIntoChildren, registerNode } from './register';

const LinkedDataNode = ({ node }: NodeProps) => {
	return <>{recurseIntoChildren(node)}</>;
};

registerNode('linked_data_node', (node) => <LinkedDataNode node={node} />);
