import React from 'react';
import renderer from 'react-test-renderer';
import { Content, emptyDoc } from '../';

test('Test empty doc', () => {
	const component = renderer.create(<Content node={emptyDoc()} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple text', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'text',
				text: 'Hi',
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple paragraph', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple blockquote', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'blockquote',
				content: [
					{
						type: 'text',
						text: 'Hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple break', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'br',
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple hr', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'hr',
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple emoji', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'emoji',
				attrs: {
					emoji: '❤️',
					markup: 'heart',
				},
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple bullet list', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'bullet_list',
				content: [
					{
						type: 'list_item',
						content: [
							{
								type: 'text',
								text: 'Hi',
							},
						],
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple ordered list', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'ordered_list',
				content: [
					{
						type: 'list_item',
						content: [
							{
								type: 'text',
								text: 'Hi',
							},
						],
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple code block', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'code_block',
				attrs: {
					language: 'javascript',
				},
				content: [
					{
						type: 'text',
						text: 'var a = 1;',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H1', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'heading',
				attrs: {
					level: 1,
				},
				content: [
					{
						type: 'text',
						text: 'Heading',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H2', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'heading',
				attrs: {
					level: 2,
				},
				content: [
					{
						type: 'text',
						text: 'Heading',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H3', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'heading',
				attrs: {
					level: 3,
				},
				content: [
					{
						type: 'text',
						text: 'Heading',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H4', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'heading',
				attrs: {
					level: 4,
				},
				content: [
					{
						type: 'text',
						text: 'Heading',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple warning notice', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'notice',
				attrs: {
					style: 'warning',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple error notice', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'notice',
				attrs: {
					style: 'error',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple info notice', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'notice',
				attrs: {
					style: 'info',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple inline image', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'inline-image',
				attrs: {
					src: 'https://cdn.pinpoint.com/card.png',
					alt: 'card',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple inline image with link', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'inline-image',
				attrs: {
					src: 'https://cdn.pinpoint.com/card.png',
					alt: 'card',
					href: 'https://pinpoint.com',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple image block', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'image_block',
				attrs: {
					src: 'https://cdn.pinpoint.com/card.png',
					alt: 'card',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple image block with link', () => {
	const doc = {
		type: 'doc',
		content: [
			{
				type: 'image_block',
				attrs: {
					src: 'https://cdn.pinpoint.com/card.png',
					alt: 'card',
					href: 'https://pinpoint.com',
				},
				content: [
					{
						type: 'text',
						text: 'hi',
					},
				],
			},
		],
	};
	const component = renderer.create(<Content node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
