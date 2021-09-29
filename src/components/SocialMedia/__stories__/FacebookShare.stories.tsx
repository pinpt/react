import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Facebook/FacebookShare';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/FacebookShare',
	parameters: {
		jest: ['SocialMediaFacebookShare.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const FacebookShare: React.VFC<{}> = () => <SocialComponent href="https://pinpoint.com/" newTab />;
