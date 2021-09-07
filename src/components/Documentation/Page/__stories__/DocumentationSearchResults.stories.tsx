import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import SearchResults from '../SearchResults';
import entries from '../../__data__/testEntries.json';
const { default: readme } = require('../SearchResults/README.md');
import Header from '../../../Header';
import Footer from '../../../Footer';
import Social from '../../../Social';
import Subscribe from '../../../Subscribe';
import Copyright from '../../../Copyright';
import Logo from '../../../Logo';
import Search from '../../../Search';
import Card from '../../Card';
import { GoBackWithArrow } from '../../../Pagination';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export default {
	component: SearchResults,
	title: 'Documentation Components/Page/Search Results',
	parameters: {
		jest: ['DocumentationSearchResults.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Full_Page: React.VFC<{}> = () => {
	const [currentEntry, setCurrentEntry] = useState(() => entries[0].id);
	return (
		<SearchResults
			header={<Header title="" description="Learn how to build with Pinpoint!" />}
			searchBar={<Search.Bar defaultValue="Test" />}
			searchTerm="Test"
			footer={
				<Footer
					social={
						<Social.Bar>
							<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
							<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
							<Social.Github href="https://github.com/pinpt" newTab />
							<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Social.Bar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
			results={[
				<Card key={entries[0].id} title={entries[0].title} description={entries[0].headline} />,
				<Card key={entries[1].id} title={entries[1].title} description={entries[1].headline} />,
				<Card key={entries[2].id} title={entries[2].title} description={entries[2].headline} />,
				<Card key={entries[3].id} title={entries[3].title} description={entries[3].headline} />,
			]}
			backButton={<GoBackWithArrow text="Close Search" />}
		/>
	);
};
