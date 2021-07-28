import { NodeProps, registerNode } from './register';

const Break = ({ node }: NodeProps) => {
	return <br />;
};

registerNode('br', (node) => <Break node={node} />);
