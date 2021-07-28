import { NodeProps, registerNode } from './register';

const Emoji = ({ node }: NodeProps) => {
	return (
		<span className="emoji" data-markup={node.attrs?.markup}>
			{node.attrs?.emoji}
		</span>
	);
};

registerNode('emoji', (node) => <Emoji node={node} />);
