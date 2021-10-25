import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../LinkedIn/LinkedInLink';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/LinkedInLink',
	parameters: {
		jest: ['SocialMediaLinkedInLink.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const LinkedInLink: React.VFC<{}> = () => (
	<SocialComponent href="https://linkedin.com/company/pinpoint-software" newTab />
);
