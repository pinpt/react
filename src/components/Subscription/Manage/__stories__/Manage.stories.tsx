import React from 'react';
import { Meta } from '@storybook/react';
import Manage from '../';
import subscriptions from '../__data__/subscriptions.json';
import { SubscriptionInfo } from '../../../../lib/types/subscription';
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

export const Default: React.VFC<{}> = () => (
	<Manage
		subscriptions={(subscriptions as unknown) as SubscriptionInfo}
		handleClickReSubscribe={(subId: string) => alert(`Resubscribe ${subId}`)}
		handleClickUnsubscribe={(subId: string) => alert(`Unsubscribe ${subId}`)}
		handleClickUpdate={(subId: string) => alert(`Update ${subId}`)}
		fileApi="https://file.pinpoint.com"
	/>
);
