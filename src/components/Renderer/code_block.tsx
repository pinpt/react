import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { NodeProps, registerNode } from './register';

const CodeBlock = ({ node }: NodeProps) => {
	return (
		<div className="code_block">
			<SyntaxHighlighter
				language={node.attrs.language}
				style={twilight}
				customStyle={{
					margin: '0',
					background: 'black',
					fontFamily: 'ui-monospace',
					borderWidth: '0px',
					borderRadius: '.25em',
				}}
			>
				{node.content?.[0].text ?? ''}
			</SyntaxHighlighter>
		</div>
	);
};

registerNode('code_block', (node) => <CodeBlock node={node} />);
