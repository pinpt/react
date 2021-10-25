import React, { useState } from 'react';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import Unsubscribe from '../Subscription/Unsubscribe';
import site from '../__data__/testSite.json';

const { default: readme } = require('../Subscription/Unsubscribe/README.md');

export default {
	component: Unsubscribe,
	title: 'Prebuilt Components/Subscription/Unsubscribe',
	parameters: {
		jest: ['PrebuiltUnsubscribe.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
			page: () => (
				<>
					<Subtitle />
					<Description />
					<Primary />
					<ArgsTable story={PRIMARY_STORY} />
					<Stories />
				</>
			),
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => {
	const [subscribed, setSubscribed] = useState(true);
	return (
		<Unsubscribe
			email="keegan@pinpoint.com"
			site={site}
			subscribed={subscribed}
			handleSubscribe={async () => new Promise((res) => setTimeout(() => res(setSubscribed(true)), 1000))}
			handleUnsubscribe={async () => new Promise((res) => setTimeout(() => res(setSubscribed(false)), 1000))}
		/>
	);
};
