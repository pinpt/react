import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Twitter';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/Social/Twitter',
	parameters: {
		jest: ['SocialTwitter.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Twitter: React.VFC<{}> = () => <SocialComponent href="https://twitter.com/pinpoint_sw" newTab />;
