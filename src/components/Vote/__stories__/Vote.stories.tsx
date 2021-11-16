import React from 'react';
import { Meta } from '@storybook/react';
import Vote from '../';

const { default: readme } = require('../README.md');

export default {
	component: Vote,
	title: 'Changelog Components/Vote',
	parameters: {
		jest: ['Vote.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Vote className="mx-32" />;
