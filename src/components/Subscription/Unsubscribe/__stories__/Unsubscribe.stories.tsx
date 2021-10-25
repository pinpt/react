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

export const Default: React.VFC<{}> = () => <Unsubscribe />;
