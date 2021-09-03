import React from 'react';
import { Meta } from '@storybook/react';
import SearchBar from '../Bar';
const { default: readme } = require('../Bar/README.md');

export default {
	component: SearchBar,
	title: 'Changelog Components/Search/Search Bar',
	parameters: {
		jest: ['SearchBar.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Empty: React.VFC<{}> = () => <SearchBar />;

export const Default_Value: React.VFC<{}> = () => <SearchBar defaultValue="Test Value" />;

export const Change_Handler: React.VFC<{}> = () => <SearchBar onChange={(val) => alert(`value is now ${val}`)} />;

export const Submit_Handler: React.VFC<{}> = () => <SearchBar onSubmit={(val) => alert(`submitted with ${val}`)} />;
