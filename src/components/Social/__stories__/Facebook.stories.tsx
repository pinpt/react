import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Facebook';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/Social/Facebook',
	parameters: {
		jest: ['SocialFacebook.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Facebook: React.VFC<{}> = () => (
	<SocialComponent href="https://www.facebook.com/Pinpoint.Engineering" newTab />
);
