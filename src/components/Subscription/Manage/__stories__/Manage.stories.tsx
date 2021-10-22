import React from 'react';
import { Meta } from '@storybook/react';
import Manage from '../';
const { default: readme } = require('../../README.md');

export default {
	component: Manage,
	title: 'Components/Subscription/Manage',
	parameters: {
		jest: ['SubscriptionManage.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Manage />;
