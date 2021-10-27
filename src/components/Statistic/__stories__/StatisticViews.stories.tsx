import React from 'react';
import { Meta } from '@storybook/react';
import ViewStatistic from '../Views';

const { default: readme } = require('../README.md');

export default {
	component: ViewStatistic,
	title: 'Changelog Components/Statistic/Views',
	parameters: {
		jest: ['StatisticViews.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const No_Views: React.VFC<{}> = () => <ViewStatistic count={0} />;

export const Small_Views: React.VFC<{}> = () => <ViewStatistic count={2} />;

export const Medium_Views: React.VFC<{}> = () => <ViewStatistic count={22} />;

export const Large_Views: React.VFC<{}> = () => <ViewStatistic count={2222} />;
