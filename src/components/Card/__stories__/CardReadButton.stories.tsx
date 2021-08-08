import React from 'react';
import { Meta } from '@storybook/react';
import CardReadButton from '../ReadButton';

export default {
	component: CardReadButton,
	title: 'Components/Card/Read Button',
	parameters: {
		jest: ['CardReadButton.test.tsx'],
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <CardReadButton />;

export const Link: React.VFC<{}> = () => <CardReadButton href="https://pinpoint.com" />;

export const Link_New_Tab: React.VFC<{}> = () => <CardReadButton href="https://pinpoint.com" newTab />;

export const Click_Handler: React.VFC<{}> = () => <CardReadButton onClick={() => alert('clicked!')} />;
