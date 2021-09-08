import { NodeProps, recurseIntoChildren, registerNode } from './register';
import React from 'react';
const Paragraph = ({ node }: NodeProps) => <p>{node.content?.length ? recurseIntoChildren(node) : <></>}</p>;

registerNode('paragraph', (node) => <Paragraph node={node} />);
