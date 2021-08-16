import React from 'react';
import { Meta } from '@storybook/react';
import useContent from '..';
import { Content } from '../../../../components/Renderer';
const { default: readme } = require('../README.md');

export default {
	title: 'Hooks/useContent',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Hook: React.VFC<{}> = () => {
	const { content } = useContent(
		'pinpoint',
		'PirxVTE94u3YmGNOySRY',
		'U359ytO97WPbOeLpTtlE',
		'https://changelog.pinpoint.com'
	);

	return <Content {...content} />;
};
