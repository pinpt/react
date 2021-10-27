import React from 'react';
import { NodeProps, recurseIntoChildren } from './register';

const Paragraph = ({ node }: NodeProps) => <p>{node.content?.length ? recurseIntoChildren(node) : <></>}</p>;

export default Paragraph;
