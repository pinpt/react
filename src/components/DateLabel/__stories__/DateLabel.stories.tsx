import { DateTime } from 'luxon';
import React from 'react';
import { Meta } from '@storybook/react';
import DateLabel from '../';
const { default: readme } = require('../README.md');

export default {
	component: DateLabel,
	title: 'Components/DateLabel',
	parameters: {
		jest: ['DateLabel.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

export const Default: React.VFC<{}> = () => <DateLabel />;

export const Full: React.VFC<{}> = () => <DateLabel format={DateTime.DATE_FULL} />;

export const With_Time: React.VFC<{}> = () => <DateLabel format={DateTime.DATETIME_SHORT} />;

export const Now: React.VFC<{}> = () => <DateLabel ts={Date.now()} format={DateTime.DATETIME_HUGE_WITH_SECONDS} />;
