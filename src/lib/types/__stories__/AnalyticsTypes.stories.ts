import { Meta } from '@storybook/react';
const { default: readme } = require('./Analytics.README.md');

export default {
	title: 'Types/Analytics Types',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
		viewMode: 'docs',
	},
} as Meta;

export const Docs = () => {
	return null;
};
