import React from 'react';
import { Meta } from '@storybook/react';
import Page from '..';
import Latest from '../../Latest';
import Recent from '../../Recent';
import Card from '../../ChangelogCard';
import Statistic from '../../Statistic';
import Footer from '../../Footer';
import Social from '../../Social';
import Copyright from '../../Copyright';
import Logo from '../../Logo';
import Subscribe from '../../Subscribe';
import Header from '../../Header';
const { default: readme } = require('../README.md');

export default {
	component: Page,
	title: 'Components/Page',
	parameters: {
		jest: ['Page.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';
const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export const Full_Page: React.VFC<{}> = () => (
	<Page
		header={
			<Header
				subscribe={<Subscribe href="https://pinpoint.com" />}
				title="Pinpoint Demo Changelog"
				description="See what's new in the Pinpoint Demo."
			/>
		}
		latest={
			<Latest>
				<Card.Container
					imageUrl="https://cdn.pinpoint.com/card.png"
					title={<Card.Title title={TEST_TITLE} />}
					date={<Card.Date />}
					description={<Card.Description description={TEST_DESCRIPTION} />}
					statistics={<Statistic.Bar claps={22} views={135} />}
					button={<Card.ReadButton />}
				/>
				<Card.Container
					imageUrl="https://cdn.pinpoint.com/card.png"
					title={<Card.Title title={TEST_TITLE} />}
					date={<Card.Date />}
					description={<Card.Description description={TEST_DESCRIPTION} />}
					statistics={<Statistic.Bar claps={22} views={135} />}
					button={<Card.ReadButton />}
				/>
			</Latest>
		}
		recent={
			<Recent>
				<Card.Container
					imageUrl="https://cdn.pinpoint.com/card.png"
					title={<Card.Title title={TEST_TITLE} />}
					date={<Card.Date />}
					description={<Card.Description description={TEST_DESCRIPTION} />}
					statistics={<Statistic.Bar claps={22} views={135} />}
					button={<Card.ReadButton />}
				/>
				<Card.Container
					title={<Card.Title title={TEST_TITLE} />}
					date={<Card.Date />}
					description={<Card.Description description={TEST_DESCRIPTION} />}
					statistics={<Statistic.Bar claps={22} views={135} />}
					button={<Card.ReadButton />}
				/>
				<Card.Container
					imageUrl="https://cdn.pinpoint.com/card.png"
					title={<Card.Title title={TEST_TITLE} />}
					date={<Card.Date />}
					description={<Card.Description description={`${TEST_DESCRIPTION} ${TEST_DESCRIPTION} ${TEST_DESCRIPTION}`} />}
					statistics={<Statistic.Bar claps={22} views={135} />}
					button={<Card.ReadButton />}
				/>
				<Card.Container
					imageUrl="https://cdn.pinpoint.com/card.png"
					title={<Card.Title title={TEST_TITLE} />}
					date={<Card.Date />}
					description={<Card.Description description={TEST_DESCRIPTION} />}
					statistics={<Statistic.Bar claps={22} views={135} />}
					button={<Card.ReadButton />}
				/>
			</Recent>
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
