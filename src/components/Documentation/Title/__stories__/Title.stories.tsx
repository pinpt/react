import React from 'react';
import { Meta } from '@storybook/react';
import Title from '..';
import site from '../../../Prebuilt/__data__/testSite.json';
const { default: readme } = require('../README.md');

export default {
	component: Title,
	title: 'Components/Documentation Site/Title',
	parameters: {
		jest: ['Title.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Title site={site} />;

export const Custom_Text: React.VFC<{}> = () => <Title site={site} text="Custom Site Title" />;
