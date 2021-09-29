import React from 'react';
import { Meta } from '@storybook/react';
import Bar from '../Bar';
import FacebookLink from '../Facebook/FacebookLink';
import FacebookShare from '../Facebook/FacebookShare';
import InstagramLink from '../Instagram/InstagramLink';
import TwitterLink from '../Twitter/TwitterLink';
import TwitterShare from '../Twitter/TwitterShare';
import GithubLink from '../Github/GithubLink';
import LinkedInLink from '../LinkedIn/LinkedInLink';
import LinkedInShare from '../LinkedIn/LinkedInShare';
import RSSLink from '../RSS/RSSLink';
const { default: readme } = require('../README.md');

export default {
	component: Bar,
	title: 'Changelog Components/SocialMedia/Bar',
	parameters: {
		jest: ['SocialBar.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const All: React.VFC<{}> = () => (
	<Bar>
		<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
		<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
		<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
		<GithubLink href="https://github.com/pinpt" newTab />
		<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
		<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
	</Bar>
);

export const Short: React.VFC<{}> = () => (
	<Bar>
		<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
		<GithubLink href="https://github.com/pinpt" newTab />
	</Bar>
);

export const Sharing: React.VFC<{}> = () => (
	<Bar>
		<FacebookShare href="https://pinpoint.com" newTab />
		<TwitterShare href="https://pinpoint.com" newTab />
		<LinkedInShare href="https://pinpoint.com" newTab />
	</Bar>
);

export const Single: React.VFC<{}> = () => (
	<Bar>
		<GithubLink href="https://github.com/pinpt" newTab />
	</Bar>
);
