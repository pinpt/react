import { NodeProps, recurseIntoChildren, registerNode } from './register';

const LinkedDataListItem = ({ node }: NodeProps) => {
	return <div className="linked-data-list-item">{recurseIntoChildren(node)}</div>;
};

registerNode('linked_data_list_item', (node) => <LinkedDataListItem node={node} />);
