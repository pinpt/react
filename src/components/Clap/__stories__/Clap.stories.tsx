import React from 'react'

import { Meta } from '@storybook/react';

import Clap from '..';

export default {
	component: Clap,
	title: 'Components/Clap',
} as Meta;

export const Primary: React.VFC<{}> = () => <Clap />;