import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Instagram';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Components/Social/Instagram',
	parameters: {
		jest: ['SocialInstagram.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Instagram: React.VFC<{}> = () => <SocialComponent href="https://www.instagram.com/pinpoint_sw/" newTab />;
