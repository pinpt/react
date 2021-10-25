import React from 'react';
import { Meta } from '@storybook/react';
import MostRecentPosts from '../';
import previewData from '../__data__/previewData.json';

const { default: readme } = require('../README.md');

export default {
	component: MostRecentPosts,
	title: 'Widgets/Most Recent Posts',
	parameters: {
		jest: ['MostRecentPosts.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<MostRecentPosts count={previewData.content.length} previewData={previewData as any} />
);
