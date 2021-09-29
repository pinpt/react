import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../RSS/RSSLink';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/RSSLink',
	parameters: {
		jest: ['SocialMediaRSSLink.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const RSSLink: React.VFC<{}> = () => (
	<SocialComponent href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
);
