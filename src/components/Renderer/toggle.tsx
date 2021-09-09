import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NodeProps, PmNode, recurseIntoChildren } from './register';
import React from 'react';

const getFirstChildNodeText = (node: PmNode): string | undefined => {
	if (node.content) {
		for (let i = 0; i < node.content.length; i++) {
			const child = node.content[i];
			if (child.type === 'text') {
				return child.text;
			}
			if (child.content) {
				const text = getFirstChildNodeText(child);
				if (text) {
					return text;
				}
			}
		}
	}
	return undefined;
};

const Toggle = ({ node }: NodeProps) => {
	return (
		<div className="toggle">
			<div className="options">
				<div className="icon">
					<FontAwesomeIcon icon={faCaretDown} fixedWidth />
				</div>
				<div className="title">{getFirstChildNodeText(node)}</div>
			</div>
			<div className="content">{recurseIntoChildren(node)}</div>
		</div>
	);
};

export default Toggle;
