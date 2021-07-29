import React from 'react';
import { Meta } from '@storybook/react';
import Clap from '..';

export default {
	component: Clap,
	title: 'Components/Clap',
	parameters: {
		jest: ['Clap.test.tsx'],
	},
} as Meta;

export const No_Claps: React.VFC<{}> = () => <Clap handleClap={() => console.log('click')} clapCount={0} />;

export const Small_Count: React.VFC<{}> = () => <Clap handleClap={() => console.log('click')} clapCount={2} />;

export const Medium_Count: React.VFC<{}> = () => <Clap handleClap={() => console.log('click')} clapCount={22} />;

export const Large_Count: React.VFC<{}> = () => <Clap handleClap={() => console.log('click')} clapCount={22222} />;
