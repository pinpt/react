import React from 'react';
import { Meta } from '@storybook/react';
import site from '../__data__/testSite.json';
import Header from '../Header';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
const { default: readme } = require('../Header/README.md');

export default {
	component: Header,
	title: 'Prebuilt Components/Header',
	parameters: {
		jest: ['PrebuiltHeader.test.tsx'],
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

export const Default: React.VFC<{}> = () => <Header site={site} />;
