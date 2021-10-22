import React from 'react';
import { Meta } from '@storybook/react';
import site from '../__data__/testSite.json';
import Manage from '../Subscription/Manage';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
const { default: readme } = require('../Subscription/Manage/README.md');

export default {
	component: Manage,
	title: 'Prebuilt Components/Subscription/Manage',
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

export const Default: React.VFC<{}> = () => <Manage site={site} />;
