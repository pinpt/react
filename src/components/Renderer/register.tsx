import React from 'react';
import BlockQuote from './blockquote';
import Break from './break';
import BulletList from './bullet_list';
import CodeBlock from './code_block';
import Emoji from './emoji';
import Paragraph from './paragraph';
import File from './file';
import Heading from './heading';
import Hr from './hr';
import Iframe from './iframe';
import ImageBlock from './image_block';
import InlineImage from './inline_image';
import Issue from './issue';
import LinkedDataListItem from './linked_data_list_item';
import LinkedDataList from './linked_data_list';
import LinkedDataNode from './linked_data_node';
import ListItem from './list_item';
import Notice from './notice';
import OrderedList from './ordered_list';
import PullRequest from './pull_request';
import TableData from './table_data';
import TableHeader from './table_header';
import TableRow from './table_row';
import Table from './table';
import Text from './text';
import Toggle from './toggle';

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

const nodeRegistry: Record<string, (node: PmNode) => JSX.Element> = {
	blockquote: (node: PmNode) => <BlockQuote node={node} />,
	paragraph: (node: PmNode) => <Paragraph node={node} />,
	br: (node: PmNode) => <Break node={node} />,
	bullet_list: (node: PmNode) => <BulletList node={node} />,
	code_block: (node: PmNode) => <CodeBlock node={node} />,
	emoji: (node: PmNode) => <Emoji node={node} />,
	file: (node: PmNode) => <File node={node} />,
	heading: (node: PmNode) => <Heading node={node} />,
	hr: (node: PmNode) => <Hr node={node} />,
	iframe: (node: PmNode) => <Iframe node={node} />,
	image_block: (node: PmNode) => <ImageBlock node={node} />,
	'inline-image': (node: PmNode) => <InlineImage node={node} />,
	issue: (node: PmNode) => <Issue node={node} />,
	linked_data_list_item: (node: PmNode) => <LinkedDataListItem node={node} />,
	linked_data_list: (node: PmNode) => <LinkedDataList node={node} />,
	linked_data_node: (node: PmNode) => <LinkedDataNode node={node} />,
	list_item: (node: PmNode) => <ListItem node={node} />,
	notice: (node: PmNode) => <Notice node={node} />,
	ordered_list: (node: PmNode) => <OrderedList node={node} />,
	pull_request: (node: PmNode) => <PullRequest node={node} />,
	td: (node: PmNode) => <TableData node={node} />,
	th: (node: PmNode) => <TableHeader node={node} />,
	tr: (node: PmNode) => <TableRow node={node} />,
	table: (node: PmNode) => <Table node={node} />,
	text: (node: PmNode) => <Text node={node} />,
	toggle: (node: PmNode) => <Toggle node={node} />,
};

const getNodeFactory = (nodeType: string) => nodeRegistry[nodeType];

export const ProsemirrorNodeRender = ({ node, path }: { node: PmNode; path?: string }) => {
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
