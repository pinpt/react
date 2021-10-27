import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Github/GithubLink';

const { default: readme } = require('../README.md');

export default {
	component: SocialComponent,
	title: 'Changelog Components/SocialMedia/GithubLink',
	parameters: {
		jest: ['SocialMediaGithubLink.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const GithubLink: React.VFC<{}> = () => <SocialComponent href="https://github.com/pinpt" newTab />;
