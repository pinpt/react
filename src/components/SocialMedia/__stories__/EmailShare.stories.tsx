import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Email/EmailShare';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/EmailShare',
	parameters: {
		jest: ['SocialMediaEmailShare.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const EmailShare: React.VFC<{}> = () => (
	<SocialComponent
		subject="Check out the @pinpt/react docs!"
		body="They're so great! https://react.preview.pinpoint.com/"
		newTab
	/>
);
