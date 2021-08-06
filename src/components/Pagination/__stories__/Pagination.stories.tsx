import React from 'react';
import { Meta } from '@storybook/react';
import Pagination from '../';
const { default: readme } = require('../README.md');

export default {
	component: Pagination,
	title: 'Components/Pagination',
	parameters: {
		jest: ['Pagination.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Both_Directions: React.VFC<{}> = () => (
	<Pagination goBack={() => alert('back!')} goForward={() => alert('forward!')} />
);

export const Back_Only: React.VFC<{}> = () => <Pagination goBack={() => alert('back!')} />;

export const Forward_Only: React.VFC<{}> = () => <Pagination goForward={() => alert('forward!')} />;

export const No_Pagination: React.VFC<{}> = () => <Pagination />;
