import React from 'react';
import { Meta } from '@storybook/react';
import NotificationBanner from '../';
const { default: readme } = require('../README.md');
import properties from '../__data__/properties.json';

export default {
	component: NotificationBanner,
	title: 'Widgets/Notification Banner',
	parameters: {
		jest: ['NotificationBanner.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<NotificationBanner
		background={properties.background}
		foreground={properties.foreground}
		previewData={properties.previewData}
		icon={properties.icon}
		message={properties.message}
	/>
);
