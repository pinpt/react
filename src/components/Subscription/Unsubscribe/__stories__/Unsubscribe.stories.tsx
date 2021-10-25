import React from 'react';
import { Meta } from '@storybook/react';
import Unsubscribe from '../';

const { default: readme } = require('../../README.md');

export default {
	component: Unsubscribe,
	title: 'Components/Subscription/Unsubscribe',
	parameters: {
		jest: ['SubscriptionUnsubscribe.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<Unsubscribe
		name="Pinpoint"
		logo="fileid:1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png"
		subscribed
		email="keegan@pinpoint.com"
		fileApi="https://file.pinpoint.com"
	/>
);
