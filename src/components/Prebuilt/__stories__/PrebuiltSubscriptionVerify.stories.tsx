import React from 'react';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import Verify from '../Subscription/Verify';
import site from '../__data__/testSite.json';

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
