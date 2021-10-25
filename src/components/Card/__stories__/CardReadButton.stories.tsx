import React from 'react';
import { Meta } from '@storybook/react';
import CardReadButton from '../ReadButton';

const { default: readme } = require('../ReadButton/README.md');

export default {
	component: CardReadButton,
	title: 'Changelog Components/Card/Read Button',
	parameters: {
		jest: ['CardReadButton.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

export const Default: React.VFC<{}> = () => <CardReadButton />;

export const Link: React.VFC<{}> = () => <CardReadButton href="https://pinpoint.com" />;

export const Link_New_Tab: React.VFC<{}> = () => <CardReadButton href="https://pinpoint.com" newTab />;

export const Click_Handler: React.VFC<{}> = () => <CardReadButton onClick={() => alert('clicked!')} />;
