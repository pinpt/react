import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Instagram/InstagramLink';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/InstagramLink',
	parameters: {
		jest: ['SocialMediaInstagramLink.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const InstagramLink: React.VFC<{}> = () => (
	<SocialComponent href="https://www.instagram.com/pinpoint_sw/" newTab />
);
