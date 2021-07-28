import { registerNode, recurseIntoChildren, NodeProps } from './register';

const BulletList = ({ node }: NodeProps) => {
	return <ul>{recurseIntoChildren(node)}</ul>;
};

registerNode('bullet_list', (node) => <BulletList node={node} />);
