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
