import React from 'react';
import { Meta } from '@storybook/react';
import ChangelogReadButton from '../ReadButton';

export default {
	component: ChangelogReadButton,
	title: 'Components/Changelog Card/Read Button',
	parameters: {
		jest: ['ChangelogCardReadButton.test.tsx'],
	},
} as Meta;

export const Default: React.VFC<{}> = () => <ChangelogReadButton />;

export const Link: React.VFC<{}> = () => <ChangelogReadButton href="https://pinpoint.com" />;

export const Link_New_Tab: React.VFC<{}> = () => <ChangelogReadButton href="https://pinpoint.com" newTab />;

export const Click_Handler: React.VFC<{}> = () => <ChangelogReadButton onClick={() => alert('clicked!')} />;
