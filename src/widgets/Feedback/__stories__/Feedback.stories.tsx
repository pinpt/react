import React from 'react';
import { Meta } from '@storybook/react';
import Feedback from '../';

const { default: readme } = require('../README.md');
import type { IPinpointConfig } from '../../../lib/types';

const config = {
	slug: 'pinpoint',
	siteId: 'PirxVTE94u3YmGNOySRY',
	apihost: 'api.pinpoint.com',
	pageSize: 11,
	siteUrl: 'https://changelog.pinpoint.com',
	apiKey: '1234',
} as IPinpointConfig;

export default {
	component: Feedback,
	title: 'Widgets/Feedback',
	parameters: {
		jest: ['Feedback.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Feedback title="We want your feedback!" widgetId="123" config={config} />;
