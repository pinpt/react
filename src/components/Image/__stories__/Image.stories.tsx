import React from 'react';
import { Meta } from '@storybook/react';
import Image from '../';

const { default: readme } = require('../README.md');

export default {
	component: Image,
	title: 'Changelog Components/Image',
	parameters: {
		jest: ['Image.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Image src="https://via.placeholder.com/1500" width={1500} height={1500} />;

export const Default_No_Size: React.VFC<{}> = () => <Image src="https://via.placeholder.com/1500" />;

export const Default_Alt: React.VFC<{}> = () => <Image src="https://via.placeholder.com/1500" alt="1500x1500" />;
