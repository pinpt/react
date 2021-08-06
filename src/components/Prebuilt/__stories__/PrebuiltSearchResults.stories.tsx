import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import PrebuiltSearchResults from '../SearchResults';
import { Entry, useSearch } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import Loader from '../../Loader';
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

export const Default: React.VFC<{}> = () => (
	<PrebuiltSearchResults entries={entries.slice(0, 2) as Entry[]} site={site} />
);

export const Dynamic_Results: React.VFC<{}> = () => {
	const [term, setTerm] = useState('publish');
	const { results, loading } = useSearch(term, 'PirxVTE94u3YmGNOySRY');
	return (
		<PrebuiltSearchResults
			entries={results}
			site={site}
			loading={loading}
			searchTerm={term}
			handleRemoveFromQuery={() => setTerm('')}
		/>
	);
};

export const Empty: React.VFC<{}> = () => <PrebuiltSearchResults entries={[]} site={site} />;

export const Loading: React.VFC<{}> = () => (
	<PrebuiltSearchResults loading entries={entries as Entry[]} site={site} renderCardStatistics={() => <></>} />
);

export const No_Stats: React.VFC<{}> = () => (
	<PrebuiltSearchResults entries={entries as Entry[]} site={site} renderCardStatistics={() => <></>} />
);
