import React from 'react';
import { Meta } from '@storybook/react';
import NotificationModal from '../';
import properties from '../__data__/properties.json';
import propertiesWithImage from '../__data__/properties_with_image.json';

const { default: readme } = require('../README.md');
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

export const With_Image: React.VFC<{}> = () => (
	<NotificationModal
		previewData={propertiesWithImage.previewData as any}
		header={propertiesWithImage.header}
		__previewMode
	/>
);
