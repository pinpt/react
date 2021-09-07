import React from 'react';
import { Meta } from '@storybook/react';
import Author from '..';
const { default: readme } = require('../README.md');

export default {
	component: Author,
	title: 'Changelog Components/Author',
	parameters: {
		jest: ['Author.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const AVATAR =
	'https://file.pinpoint.com/6cc744395c563f0072b339070aa327f3;UCGt%3D%3DkE~A%3FZJ6%5EhIpS%23o%5BELE3oLT0I%40t7E2;400x400.png?rw=48&rh=48';

export const Default: React.VFC<{}> = () => <Author avatarUrl={AVATAR} name="Keegan" />;

export const No_Name: React.VFC<{}> = () => <Author avatarUrl={AVATAR} />;
