import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../LinkedIn';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Components/Social/Linkedin',
	parameters: {
		jest: ['SocialLinkedIn.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Linkedin: React.VFC<{}> = () => (
	<SocialComponent href="https://linkedin.com/company/pinpoint-software" newTab />
);
