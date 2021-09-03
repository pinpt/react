import React from 'react';
import { Meta } from '@storybook/react';
import Subscribe from '../';
const { default: readme } = require('../README.md');

export default {
	component: Subscribe,
	title: 'Changelog Components/Subscribe',
	parameters: {
		jest: ['Subscribe.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Subscribe />;

export const Link: React.VFC<{}> = () => <Subscribe href="https://pinpoint.com" />;

export const Click_Handler: React.VFC<{}> = () => <Subscribe onClick={() => alert('click!')} />;

export const Custom_Text: React.VFC<{}> = () => <Subscribe text="Subscribe Now!" />;
