import { NodeProps, recurseIntoChildren } from './register';
import React from 'react';

const Paragraph = ({ node }: NodeProps) => <p>{node.content?.length ? recurseIntoChildren(node) : <></>}</p>;

export default Paragraph;
