import React from 'react';
import BlockQuote from './blockquote';

export interface DocOpts {
	openLinksInNewWindow?: boolean;
}

export interface PmMark {
	type: string;
	attrs: Record<string, any>;
}

export interface PmNode {
	type: string;
	content?: PmNode[];
	attrs?: any;
	marks?: PmMark[];
	text?: string;
	_path?: string;
	_opts?: DocOpts;
}

export interface NodeProps {
	node: PmNode;
}

export const nodeRegistry: Record<string, (node: PmNode) => JSX.Element> = {
	blockquote: (node: PmNode) => <BlockQuote node={node} />,
};

export const registerNode = (nodeType: string, factory: (node: PmNode) => JSX.Element) => {
	nodeRegistry[nodeType] = factory;
	console.log('register', nodeType, nodeRegistry);
};

export const getNodeFactory = (nodeType: string) => nodeRegistry[nodeType];

export const ProsemirrorNodeRender = ({ node, path }: { node: PmNode; path?: string }) => {
	console.log(nodeRegistry);
	const component = getNodeFactory(node.type);
	if (!component) {
		console.error(`unknown node type: ${node.type}`, node);
		return <div>unknown {node.type}</div>;
	}
	if (!node._path) {
		node._path = 'doc';
	}
	return component(node);
};

export const recurseIntoChildren = (node: PmNode, limit?: number): React.ReactNode => {
	const _content = limit ? node.content?.slice(0, limit) : node.content ?? [];
	return _content?.map((nextNode, index) => {
		const path = `${node._path}.${index}.${nextNode.type}`;
		nextNode._path = path;
		nextNode._opts = node._opts;
		return <ProsemirrorNodeRender key={path} node={nextNode} />;
	});
};


