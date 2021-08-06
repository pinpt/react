import React from 'react';
import { Meta } from '@storybook/react';
import Bar from '../Bar';
const { default: readme } = require('../README.md');

export default {
	component: Bar,
	title: 'Components/Tag/Bar',
	parameters: {
		jest: ['TagBar.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Single_Tag: React.VFC<{}> = () => <Bar tags={['feature']} />;

export const Two_Tags: React.VFC<{}> = () => <Bar tags={['feature', 'improvement']} />;

export const Three_Tags: React.VFC<{}> = () => <Bar tags={['feature', 'improvement', 'bug']} />;

export const Removable: React.VFC<{}> = () => <Bar removable tags={['feature', 'improvement', 'bug']} />;
