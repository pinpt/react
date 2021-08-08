import React from 'react';
import { Meta } from '@storybook/react';
import CardDescription from '../Description';

export default {
	component: CardDescription,
	title: 'Components/Card/Description',
	parameters: {
		jest: ['CardDescription.test.tsx'],
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Short: React.VFC<{}> = () => <CardDescription description="Short and Sweet" />;

export const Long: React.VFC<{}> = () => (
	<CardDescription description="This is a pretty normal length for a description so I'm just going to use it to show that the content works fine and looks the way we expect it to." />
);

export const Empty: React.VFC<{}> = () => <CardDescription description="" />;
