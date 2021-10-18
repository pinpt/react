import React from 'react';
import { Meta } from '@storybook/react';
import NotificationPopup from '../';
const { default: readme } = require('../README.md');
import properties from '../__data__/properties.json';

export default {
	component: NotificationPopup,
	title: 'Widgets/Notification Popup',
	parameters: {
		jest: ['NotificationPopup.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<NotificationPopup
		header={properties.header}
		previewData={properties.previewData as any}
		button={properties.button}
		target={properties.trigger as any}
		__previewMode
	/>
);
