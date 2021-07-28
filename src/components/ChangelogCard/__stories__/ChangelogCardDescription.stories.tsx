import React from 'react';
import { Meta } from '@storybook/react';
import ChangelogDescription from '../Description';

export default {
	component: ChangelogDescription,
	title: 'Components/Changelog Card/Description',
	parameters: {
		jest: ['ChangelogCardDescription.test.tsx'],
	}
} as Meta;

export const Short: React.VFC<{}> = () => <ChangelogDescription description="Short and Sweet" />;

export const Long: React.VFC<{}> = () => <ChangelogDescription description="This is a pretty normal length for a description so I'm just going to use it to show that the content works fine and looks the way we expect it to." />;

export const Empty: React.VFC<{}> = () => <ChangelogDescription description="" />;
