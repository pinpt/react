import React from 'react';
import { Meta } from '@storybook/react';
import Home from '../Home';
import { Entry } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
const { default: readme } = require('../Home/README.md');

export default {
	component: Home,
	title: 'Smart Components/Home',
	parameters: {
		jest: ['SmartHome.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Home entries={entries as Entry[]} site={site} />;

export const Custom_Latest_Length: React.VFC<{}> = () => (
	<Home entries={entries as Entry[]} site={site} latestCount={2} />
);

export const No_Stats: React.VFC<{}> = () => (
	<Home entries={entries as Entry[]} site={site} renderCardStatistics={() => <></>} />
);
