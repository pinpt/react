import React from 'react';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { NodeProps } from './register';

const Copy = ({ text }: { text: string }) => {
	const [copied, setCopied] = React.useState(false);
	const onCopy = () => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	};
	return (
		<div className={`copy ${copied && 'copied'}`} onClick={onCopy}>
			<FontAwesomeIcon icon={copied ? faCheck : faCopy} />
		</div>
	);
};

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
			<Copy text={node.content?.[0].text ?? ''} />
		</div>
	);
};

export default CodeBlock;
