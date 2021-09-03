import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Github';
const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/Social/Github',
	parameters: {
		jest: ['SocialGithub.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Github: React.VFC<{}> = () => <SocialComponent href="https://github.com/pinpt" newTab />;
