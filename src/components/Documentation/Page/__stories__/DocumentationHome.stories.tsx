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
import {
	SocialMediaBar,
	FacebookLink,
	InstagramLink,
	TwitterLink,
	GithubLink,
	LinkedInLink,
	RSSLink,
} from '../../../SocialMedia';
import Subscribe from '../../../Subscribe';
import Copyright from '../../../Copyright';
import Logo from '../../../Logo';
import Pagination from '../../../Pagination';
import Search from '../../../Search';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export default {
	component: Home,
	title: 'Documentation Components/Page/Home',
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
						<SocialMediaBar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</SocialMediaBar>
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
						<SocialMediaBar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</SocialMediaBar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
			pagination={<Pagination goForward={() => console.log('forward')} goBack={() => console.log('back')} />}
		/>
	);
};

export const With_Search: React.VFC<{}> = () => {
	const [currentEntry, setCurrentEntry] = useState(() => entries[0].id);
	return (
		<Home
			header={<Header title="Pinpoint Documentation" description="Learn how to build with Pinpoint!" />}
			searchBar={<Search.Bar />}
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
						<SocialMediaBar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</SocialMediaBar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
};
