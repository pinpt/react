import React from 'react';
import { Meta } from '@storybook/react';
import Subscribe from '../';

const { default: readme } = require('../../README.md');

export default {
	component: Subscribe,
	title: 'Components/Subscription/Subscribe',
	parameters: {
		jest: ['SubscriptionSubscribe.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Subscribe />;

export const With_Name: React.VFC<{}> = () => <Subscribe name="Pinpoint" />;

export const With_Pending_State: React.VFC<{}> = () => <Subscribe name="Pinpoint" pending />;

export const With_Success_Handler: React.VFC<{}> = () => (
	<Subscribe name="Pinpoint" handleSubmit={(email) => new Promise((resolve) => resolve(true))} />
);

export const With_Error_Handler: React.VFC<{}> = () => (
	<Subscribe name="Pinpoint" handleSubmit={(email) => new Promise((resolve) => resolve(false))} />
);
