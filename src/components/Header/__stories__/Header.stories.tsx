import React from 'react';
import { Meta } from '@storybook/react';
import Header from '..';
import Subscribe from '../../Subscribe';
import ThemeToggle from '../../ThemeToggle';
const { default: readme } = require('../README.md');

export default {
	component: Header,
	title: 'Components/Header',
	parameters: {
		jest: ['Header.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Complete: React.VFC<{}> = () => (
	<Header
		subscribe={<Subscribe href="https://pinpoint.com" />}
		title="Pinpoint Demo Changelog"
		description="See what's new in the Pinpoint Demo."
		themeToggle={<ThemeToggle />}
	/>
);

export const Empty: React.VFC<{}> = () => <Header />;

export const Theme_Toggle_Only: React.VFC<{}> = () => <Header themeToggle={<ThemeToggle />} />;

export const Title_Only: React.VFC<{}> = () => <Header title="Pinpoint Demo Changelog" />;

export const No_Description: React.VFC<{}> = () => (
	<Header title="Pinpoint Demo Changelog" subscribe={<Subscribe href="https://pinpoint.com" />} />
);
