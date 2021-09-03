import React from 'react';
import { Meta } from '@storybook/react';
import Footer from '..';
import Social from '../../Social';
import Copyright from '../../Copyright';
import Logo from '../../Logo';
import Subscribe from '../../Subscribe';
const { default: readme } = require('../README.md');

export default {
	component: Footer,
	title: 'Changelog Components/Footer',
	parameters: {
		jest: ['Footer.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export const Complete: React.VFC<{}> = () => (
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
);

export const No_Social: React.VFC<{}> = () => (
	<Footer
		copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
		subscribe={<Subscribe href="https://pinpoint.com" />}
	/>
);

export const No_Subscribe: React.VFC<{}> = () => (
	<Footer copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />} />
);

export const Social_Only: React.VFC<{}> = () => (
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
	/>
);
