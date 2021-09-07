import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import SearchResults from '../SearchResults';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
const { default: readme } = require('../README.md');
import { IContent } from '../../../../lib';

export default {
	component: SearchResults,
	title: 'Documentation Components/Prebuilt/Search Results',
	parameters: {
		jest: ['PrebuiltDocumentationSearchResults.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Full_Page: React.VFC<{}> = () => {
	const [term, setTerm] = useState('Test');
	return (
		<SearchResults
			site={site}
			entries={entries as IContent[]}
			searchTerm={term}
			handleSearch={setTerm}
			setCurrentEntry={(id) => alert(`Show entry ${id}`)}
			handleCancelSearch={() => setTerm('')}
		/>
	);
};

export const Loading: React.VFC<{}> = () => {
	const [term, setTerm] = useState('Test');
	return (
		<SearchResults
			site={site}
			entries={entries as IContent[]}
			searchTerm={term}
			handleSearch={setTerm}
			setCurrentEntry={(id) => alert(`Show entry ${id}`)}
			handleCancelSearch={() => setTerm('')}
			loading
		/>
	);
};

export const No_Results: React.VFC<{}> = () => {
	const [term, setTerm] = useState('Test');
	return (
		<SearchResults
			site={site}
			entries={[] as IContent[]}
			searchTerm={term}
			handleSearch={setTerm}
			setCurrentEntry={(id) => alert(`Show entry ${id}`)}
			handleCancelSearch={() => setTerm('')}
		/>
	);
};
