import { useState } from 'react';
import { Title, Subtitle, Description, Primary, Stories } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import SearchResults from '../../../components/Prebuilt/SearchResults';
import site from '../../../components/Prebuilt/__data__/testSite.json';
import useSearch from '../../hooks/useSearch';

const { default: readme } = require('./Search.README.md');

export default {
	title: 'Types/Search Types',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<Stories />
				</>
			),
		},
		controls: { hideNoControlsWarning: true },
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
		viewMode: 'docs',
	},
} as Meta;

export const Docs: React.VFC<{}> = () => {
	const [term, setTerm] = useState('publish');
	const { results, loading } = useSearch(term, [], 'PirxVTE94u3YmGNOySRY');
	return (
		<SearchResults
			entries={results}
			site={site}
			loading={loading}
			searchTerm={term}
			handleRemoveFromQuery={() => setTerm('')}
			handleSearch={setTerm}
		/>
	);
};
