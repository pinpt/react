import React from 'react';
import { Meta } from '@storybook/react';
import ThemeToggle from '../';
const { default: readme } = require('../README.md');

export default {
	component: ThemeToggle,
	title: 'Changelog Components/Theme Toggle',
	parameters: {
		jest: ['ThemeToggle.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <ThemeToggle />;

export const Change_Listener: React.VFC<{}> = () => (
	<ThemeToggle onThemeChange={(theme) => alert(`The theme is now ${theme}`)} />
);
