import React from 'react';
import { Meta } from '@storybook/react';
import NotificationModal from '../';
const { default: readme } = require('../README.md');
import properties from '../__data__/properties.json';

export default {
	component: NotificationModal,
	title: 'Widgets/Notification Modal',
	parameters: {
		jest: ['NotificationModal.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<NotificationModal previewData={properties.previewData as any} header={properties.header} __previewMode />
);
