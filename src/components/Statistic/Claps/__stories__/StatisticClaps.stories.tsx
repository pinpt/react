import React from 'react'
import { Meta } from '@storybook/react';
import ClapStatistic from '..';

export default {
	component: ClapStatistic,
	title: 'Components/Statistic/Claps',
} as Meta;

export const No_Claps: React.VFC<{}> = () => <ClapStatistic count={0} />;

export const Small_Claps: React.VFC<{}> = () => <ClapStatistic count={2} />;

export const Medium_Claps: React.VFC<{}> = () => <ClapStatistic count={22} />;

export const Large_Claps: React.VFC<{}> = () => <ClapStatistic count={2222} />;

