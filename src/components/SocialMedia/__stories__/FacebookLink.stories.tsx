import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Facebook/FacebookLink';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/FacebookLink',
	parameters: {
		jest: ['SocialMediaFacebookLink.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const FacebookLink: React.VFC<{}> = () => (
	<SocialComponent href="https://www.facebook.com/Pinpoint.Engineering" newTab />
);
