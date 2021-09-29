import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Twitter/TwitterLink';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/TwitterLink',
	parameters: {
		jest: ['SocialMediaTwitterLink.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const TwitterLink: React.VFC<{}> = () => <SocialComponent href="https://twitter.com/pinpoint_sw" newTab />;
