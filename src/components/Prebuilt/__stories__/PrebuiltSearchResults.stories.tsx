import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { useSearch } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import PrebuiltSearchResults from '../SearchResults';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
const { default: readme } = require('../SearchResults/README.md');

import type { IContent } from '../../../lib/types';

export default {
	component: PrebuiltSearchResults,
	title: 'Prebuilt Components/Search Results',
	parameters: {
		jest: ['PrebuiltSearchResults.test.tsx'],
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

export const Default: React.VFC<{}> = () => (
	<PrebuiltSearchResults entries={entries.slice(0, 2) as IContent[]} site={site} />
);

export const Dynamic_Results_Term: React.VFC<{}> = () => {
	const [term, setTerm] = useState('publish');
	const { results, loading } = useSearch(term, [], 'PirxVTE94u3YmGNOySRY');
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

export const Dynamic_Results_Tags: React.VFC<{}> = () => {
	const { results, loading } = useSearch('', ['bug'], 'PirxVTE94u3YmGNOySRY');
	return <PrebuiltSearchResults entries={results} site={site} loading={loading} searchTags={['bug']} />;
};

export const Clickable_Tags: React.VFC<{}> = () => {
	const [tags, setTags] = useState([]);

	const handleAddTag = useCallback((value: string) => {
		setTags((prev) => {
			if (!prev.includes(value)) {
				return [...prev, value];
			}
			return prev;
		});
	}, []);

	const handleRemoveTag = useCallback((value: string) => {
		setTags((prev) => {
			const idx = prev.indexOf(value);
			if (idx >= 0) {
				const res = [...prev];
				res.splice(idx, 1);
				return res;
			}
			return prev;
		});
	}, []);

	return (
		<PrebuiltSearchResults
			entries={entries as IContent[]}
			searchTags={tags}
			site={site}
			handleRemoveFromQuery={(value: string) => handleRemoveTag(value)}
			handleAddTagToQuery={(value: string) => handleAddTag(value)}
		/>
	);
};
export const Empty: React.VFC<{}> = () => <PrebuiltSearchResults entries={[]} site={site} />;

export const Loading: React.VFC<{}> = () => (
	<PrebuiltSearchResults loading entries={entries as IContent[]} site={site} renderCardStatistics={() => <></>} />
);

export const No_Stats: React.VFC<{}> = () => (
	<PrebuiltSearchResults entries={entries as IContent[]} site={site} renderCardStatistics={() => <></>} />
);
