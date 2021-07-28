import React from 'react';
import { Meta } from '@storybook/react';
import StatisticsBar from '../Bar';

export default {
	component: StatisticsBar,
	title: 'Components/Statistic/Bar',
} as Meta;

export const Empty: React.VFC<{}> = () => <StatisticsBar claps={0} views={0} />;

export const Small_Values: React.VFC<{}> = () => <StatisticsBar claps={2} views={2} />;

export const Medium_Values: React.VFC<{}> = () => <StatisticsBar claps={22} views={22} />;

export const Large_Values: React.VFC<{}> = () => <StatisticsBar claps={2222} views={2222} />;
