import { DateTime } from 'luxon';
import React from 'react';
import { Meta } from '@storybook/react';
import CardDate from '../Date';

export default {
	component: CardDate,
	title: 'Components/Card/Date',
	parameters: {
		jest: ['CardDate.test.tsx'],
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <CardDate />;

export const Full: React.VFC<{}> = () => <CardDate format={DateTime.DATE_FULL} />;

export const With_Time: React.VFC<{}> = () => <CardDate format={DateTime.DATETIME_SHORT} />;

export const Now: React.VFC<{}> = () => <CardDate ts={Date.now()} format={DateTime.DATETIME_HUGE_WITH_SECONDS} />;
