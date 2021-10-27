import React from 'react';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import Subscribe from '../Subscription/Subscribe';
import site from '../__data__/testSite.json';

const { default: readme } = require('../Subscription/Subscribe/README.md');

export default {
	component: Subscribe,
	title: 'Prebuilt Components/Subscription/Subscribe',
	parameters: {
		jest: ['PrebuiltSubscribe.test.tsx'],
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

export const Default: React.VFC<{}> = () => <Subscribe site={site} />;
