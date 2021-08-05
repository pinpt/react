import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import PrebuiltSearchResults from '../SearchResults';
import { Entry, useSearch } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
const { default: readme } = require('../SearchResults/README.md');

export default {
	component: PrebuiltSearchResults,
	title: 'Prebuilt Components/Search Results',
	parameters: {
		jest: ['PrebuiltSearchResults.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <PrebuiltSearchResults entries={entries as Entry[]} site={site} />;

export const Dynamic_Results: React.VFC<{}> = () => {
	const { results } = useSearch('publish', 'PirxVTE94u3YmGNOySRY');
	return <PrebuiltSearchResults entries={results} site={site} />;
};

export const No_Stats: React.VFC<{}> = () => (
	<PrebuiltSearchResults entries={entries as Entry[]} site={site} renderCardStatistics={() => <></>} />
);