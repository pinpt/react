import React from 'react';
import { Meta } from '@storybook/react';
import site from '../__data__/testSite.json';
import Verify from '../Subscription/Verify';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
const { default: readme } = require('../Subscription/Verify/README.md');

export default {
	component: Verify,
	title: 'Prebuilt Components/Subscription/Verify',
	parameters: {
		jest: ['PrebuiltVerify.test.tsx'],
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

export const Default: React.VFC<{}> = () => <Verify site={site} />;
