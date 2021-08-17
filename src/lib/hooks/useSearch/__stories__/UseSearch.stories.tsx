import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import useSearch from '../';
import PrebuiltSearchResults from '../../../../components/Prebuilt/SearchResults';
const { default: readme } = require('../README.md');
import site from '../../../../components/Prebuilt/__data__/testSite.json';

export default {
	title: 'Hooks/useSearch',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Hook: React.VFC<{}> = () => {
	const [term, setTerm] = useState('publish');
	const { results, loading } = useSearch(term, [], 'PirxVTE94u3YmGNOySRY');
	return (
		<PrebuiltSearchResults
			entries={results as any}
			site={site}
			loading={loading}
			searchTerm={term}
			handleRemoveFromQuery={() => setTerm('')}
			handleSearch={setTerm}
		/>
	);
};