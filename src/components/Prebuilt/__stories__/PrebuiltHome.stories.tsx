import React from 'react';
import { Meta } from '@storybook/react';
import analytics from '../__data__/testAnalytics.json';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import Home from '../Home';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import type { IContent } from '../../../lib/types';
const { default: readme } = require('../Home/README.md');

export default {
	component: Home,
	title: 'Prebuilt Components/Home',
	parameters: {
		jest: ['PrebuiltHome.test.tsx'],
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

export const Default: React.VFC<{}> = () => <Home entries={entries as IContent[]} analytics={analytics} site={site} />;

export const WithLogo: React.VFC<{}> = () => <Home entries={entries as IContent[]} analytics={analytics} site={site} />;

export const Custom_Latest_Length: React.VFC<{}> = () => (
	<Home entries={entries as IContent[]} site={site} latestCount={2} />
);

export const No_Stats: React.VFC<{}> = () => (
	<Home entries={entries as IContent[]} site={site} renderCardStatistics={() => <></>} />
);

export const Pagination: React.VFC<{}> = () => (
	<Home
		entries={entries.slice(0, 6) as IContent[]}
		site={site}
		pageForward={() => alert('forward!')}
		pageBack={() => alert('back!')}
	/>
);
