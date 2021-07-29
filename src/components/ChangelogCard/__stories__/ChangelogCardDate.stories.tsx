import React from 'react';
import { Meta } from '@storybook/react';
import ChangelogDate from '../Date';
import { DateTime } from 'luxon';

export default {
	component: ChangelogDate,
	title: 'Components/Changelog Card/Date',
	parameters: {
		jest: ['ChangelogCardDate.test.tsx'],
	}
} as Meta;

export const Default: React.VFC<{}> = () => <ChangelogDate />;

export const Full: React.VFC<{}> = () => <ChangelogDate format={DateTime.DATE_FULL} />;

export const With_Time: React.VFC<{}> = () => <ChangelogDate format={DateTime.DATETIME_SHORT} />;

export const Now: React.VFC<{}> = () => <ChangelogDate ts={Date.now()} format={DateTime.DATETIME_HUGE_WITH_SECONDS} />;
