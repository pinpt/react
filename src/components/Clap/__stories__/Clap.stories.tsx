import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Clap from '..';
const { default: readme } = require('../README.md');

export default {
	component: Clap,
	title: 'Changelog Components/Clap',
	parameters: {
		jest: ['Clap.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const No_Claps: React.VFC<{}> = () => {
	const [count, setCount] = useState(0);
	return <Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />;
};

export const Small_Count: React.VFC<{}> = () => {
	const [count, setCount] = useState(2);
	return <Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />;
};

export const Medium_Count: React.VFC<{}> = () => {
	const [count, setCount] = useState(22);
	return <Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />;
};

export const Large_Count: React.VFC<{}> = () => {
	const [count, setCount] = useState(2222);
	return <Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />;
};
