import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Twitter/TwitterShare';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/TwitterShare',
	parameters: {
		jest: ['SocialMediaTwitterShare.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const TwitterShare: React.VFC<{}> = () => <SocialComponent href="https://pinpoint.com/" newTab />;
