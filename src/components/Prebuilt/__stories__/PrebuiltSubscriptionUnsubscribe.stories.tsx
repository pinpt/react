import React from 'react';
import { Meta } from '@storybook/react';
import site from '../__data__/testSite.json';
import Unsubscribe from '../Subscription/Unsubscribe';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
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

export const Default: React.VFC<{}> = () => <Unsubscribe site={site} />;
