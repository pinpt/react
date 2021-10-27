import React from 'react';
import { Meta } from '@storybook/react';
import CardTitle from '../Title';

const { default: readme } = require('../Title/README.md');

export default {
	component: CardTitle,
	title: 'Changelog Components/Card/Title',
	parameters: {
		jest: ['CardTitle.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

export const Short: React.VFC<{}> = () => <CardTitle title="Short and Sweet" />;

export const Long: React.VFC<{}> = () => (
	<CardTitle title="This is an absurdly long title and you would never really want this but I guess we'll show it here anyways just for you" />
);

export const Empty: React.VFC<{}> = () => <CardTitle title="" />;
