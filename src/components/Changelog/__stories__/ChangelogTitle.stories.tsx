import React from 'react';
import { Meta } from '@storybook/react';
import ChangelogTitle from '../Title';

export default {
	component: ChangelogTitle,
	title: 'Components/Changelog/Title',
} as Meta;

export const Short: React.VFC<{}> = () => <ChangelogTitle title="Short and Sweet" />;

export const Long: React.VFC<{}> = () => <ChangelogTitle title="This is an absurdly long title and you would never really want this but I guess we'll show it here anyways just for you" />;

export const Empty: React.VFC<{}> = () => <ChangelogTitle title="" />;
