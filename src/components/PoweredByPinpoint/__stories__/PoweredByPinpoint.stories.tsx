import React from 'react';
import { Meta } from '@storybook/react';
import PoweredBy from '..';

const { default: readme } = require('../README.md');

export default {
	component: PoweredBy,
	title: 'Changelog Components/Powered By Pinpoint',
	parameters: {
		jest: ['PoweredByPinpoint.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <PoweredBy />;
