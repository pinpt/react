import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Entry from '../Entry';
import { Content } from '../../Renderer';
import Subscribe from '../../Subscribe';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Author from '../../Author';
import Tags from '../../Tags';
import Clap from '../../Clap';
import Footer from '../../Footer';
import Social from '../../Social';
import Copyright from '../../Copyright';
import Logo from '../../Logo';
import testDoc from '../Entry/__data__/testDoc.json';
import testCoverMedia from '../Entry/__data__/testCoverMedia.json';
import DateLabel from '../../DateLabel';
import Pagination from '../../Pagination';
import { ICoverMedia } from '../../../lib/types';
const { default: readme } = require('../Entry/README.md');

export default {
	component: Entry,
	title: 'Changelog Components/Page/Entry',
	parameters: {
		jest: ['PageEntry.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const AVATAR =
	'https://file.pinpoint.com/6cc744395c563f0072b339070aa327f3;UCGt%3D%3DkE~A%3FZJ6%5EhIpS%23o%5BELE3oLT0I%40t7E2;400x400.png?rw=48&rh=48';
const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export const Default: React.VFC<{}> = () => {
	const [count, setCount] = useState(12);
	return (
		<Entry
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Content document={testDoc} id="1234" />}
			sidebar={
				<Sidebar
					date={<DateLabel />}
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
					sharing={
						<Social.Bar>
							<Social.Facebook sharing href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
							<Social.LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.Email sharing href="mailto:hello@pinpoint.com" />
						</Social.Bar>
					}
				/>
			}
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
	const [count, setCount] = useState(12);
	return (
		<Entry
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Content document={testDoc} id="1234" />}
			sidebar={
				<Sidebar
					date={<DateLabel />}
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
					sharing={
						<Social.Bar>
							<Social.Facebook sharing href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
							<Social.LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.Email sharing href="mailto:hello@pinpoint.com" />
						</Social.Bar>
					}
				/>
			}
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
			pagination={
				<Pagination
					goBackText={<Pagination.GoBackWithArrow text="Previous Entry" />}
					goBack={() => alert('back!')}
					goForwardText={<Pagination.GoForwardWithArrow text="Next Entry" />}
					goForward={() => alert('forward!')}
				/>
			}
		/>
	);
};

export const Not_Zoomable: React.VFC<{}> = () => {
	const [count, setCount] = useState(12);
	return (
		<Entry
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Content document={testDoc} id="1234" />}
			sidebar={
				<Sidebar
					date={<DateLabel />}
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
					sharing={
						<Social.Bar>
							<Social.Facebook sharing href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
							<Social.LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.Email sharing href="mailto:hello@pinpoint.com" />
						</Social.Bar>
					}
				/>
			}
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
			zoomable={false}
		/>
	);
};
