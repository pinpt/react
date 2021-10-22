import React from 'react';
import { Meta } from '@storybook/react';
import Verify from '../';
const { default: readme } = require('../../README.md');

export default {
	component: Verify,
	title: 'Components/Subscription/Verify',
	parameters: {
		jest: ['SubscriptionVerify.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Verify />;
