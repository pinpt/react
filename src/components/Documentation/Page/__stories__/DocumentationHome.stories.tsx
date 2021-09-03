import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Home from '../Home';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
const { default: readme } = require('../Home/README.md');
import Header from '../../../Header';
import Outline from '../../Outline';
import { IContent } from '../../../../lib';
import { Content } from '../../../Renderer';
import Footer from '../../../Footer';
import Social from '../../../Social';
import Subscribe from '../../../Subscribe';
import Copyright from '../../../Copyright';
import Logo from '../../../Logo';
import Pagination from '../../../Pagination';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export default {
	component: Home,
	title: 'Components/Documentation Site/Page/Home',
	parameters: {
		jest: ['DocumentationHome.test.tsx'],
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
		<Home
			header={<Header title="Pinpoint Documentation" description="Learn how to build with Pinpoint!" />}
			outline={
				<Outline
					entries={entries as IContent[]}
					site={site}
					active={currentEntry}
					onClick={(e) => setCurrentEntry(e.id)}
				/>
			}
			content={<Content id={currentEntry} document={entries.find((e) => e.id === currentEntry).document} />}
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
		/>
	);
};

export const With_Pagination: React.VFC<{}> = () => {
	const [currentEntry, setCurrentEntry] = useState(() => entries[0].id);
	return (
		<Home
			header={<Header title="Pinpoint Documentation" description="Learn how to build with Pinpoint!" />}
			outline={
				<Outline
					entries={entries as IContent[]}
					site={site}
					active={currentEntry}
					onClick={(e) => setCurrentEntry(e.id)}
				/>
			}
			content={<Content id={currentEntry} document={entries.find((e) => e.id === currentEntry).document} />}
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
			pagination={<Pagination goForward={() => console.log('forward')} goBack={() => console.log('back')} />}
		/>
	);
};
