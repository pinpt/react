import React from 'react';
import { Meta } from '@storybook/react';
import Loader from '../';

const { default: readme } = require('../README.md');

export default {
	component: Loader,
	title: 'Changelog Components/Loader',
	parameters: {
		jest: ['Loader.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const With_Logo: React.VFC<{}> = () => <Loader />;
