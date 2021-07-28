import { registerNode, recurseIntoChildren, NodeProps } from './register';

const BlockQuote = ({ node }: NodeProps) => {
	return <blockquote>{recurseIntoChildren(node)}</blockquote>;
};

registerNode('blockquote', (node) => <BlockQuote node={node} />);
