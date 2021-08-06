import React from 'react';
import { Meta } from '@storybook/react';
import Item from '../Item';
const { default: readme } = require('../README.md');

export default {
	component: Item,
	title: 'Components/Tag/Item',
	parameters: {
		jest: ['TagItem.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Test: React.VFC<{}> = () => <Item tag="test" />;

export const Another_Test: React.VFC<{}> = () => <Item tag="another-test" />;

export const Third_Test: React.VFC<{}> = () => <Item tag="third-test" />;

export const Removable: React.VFC<{}> = () => <Item tag="remove me!" removable />;

export const No_Color: React.VFC<{}> = () => <Item noColor tag="remove me!" removable />;
