import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../LinkedIn/LinkedInShare';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/LinkedInShare',
	parameters: {
		jest: ['SocialMediaLinkedInShare.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const LinkedInShare: React.VFC<{}> = () => <SocialComponent href="https://pinpoint.com/" newTab />;
