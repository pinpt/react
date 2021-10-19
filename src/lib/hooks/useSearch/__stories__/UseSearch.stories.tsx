import { useState } from 'react';
import { Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import useSearch from '../';
import site from '../../../../components/Prebuilt/__data__/testSite.json';
import PrebuiltSearchResults from '../../../../components/Prebuilt/SearchResults';

const { default: readme } = require('../README.md');
export default {
	title: 'Hooks/useSearch',
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
	},
} as Meta;

export const Hook: React.VFC<{}> = () => {
	const [term, setTerm] = useState('publish');
	const { results, loading } = useSearch(term, [], site);
	return (
		<PrebuiltSearchResults
			entries={results}
			site={site}
			loading={loading}
			searchTerm={term}
			handleRemoveFromQuery={() => setTerm('')}
			handleSearch={setTerm}
		/>
	);
};
