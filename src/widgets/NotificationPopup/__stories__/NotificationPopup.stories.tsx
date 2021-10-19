import React from 'react';
import { Meta } from '@storybook/react';
import NotificationPopup from '../';
import properties from '../__data__/properties.json';
import propertiesWithImage from '../__data__/properties_with_image.json';

const { default: readme } = require('../README.md');
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

export const With_Image: React.VFC<{}> = () => (
	<NotificationPopup
		header={propertiesWithImage.header}
		previewData={propertiesWithImage.previewData as any}
		button={propertiesWithImage.button}
		target={propertiesWithImage.trigger as any}
		__previewMode
	/>
);
