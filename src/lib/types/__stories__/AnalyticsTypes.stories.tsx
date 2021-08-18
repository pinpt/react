import { Meta } from '@storybook/react';
const { default: readme } = require('./Analytics.README.md');
import { Title, Subtitle, Description } from '@storybook/addon-docs';

export default {
	title: 'Types/Analytics Types',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
				</>
			),
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