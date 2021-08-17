import { Meta } from '@storybook/react';
const { default: readme } = require('./Config.README.md');

export default {
	title: 'Types/Pinpoint Config Types',
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
	return <></>;
};
