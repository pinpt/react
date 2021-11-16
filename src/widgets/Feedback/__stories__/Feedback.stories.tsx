import React from 'react';
import { Meta } from '@storybook/react';
import Feedback from '../';
import type { IPinpointConfig } from '../../../lib/types';

const { default: readme } = require('../README.md');

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

export const Disclaimer: React.VFC<{}> = () => (
	<Feedback title="We want your feedback!" widgetId="123" config={config} disclaimer="This is a disclaimer" />
);

export const ButtonTitle: React.VFC<{}> = () => (
	<Feedback title="We want your feedback!" widgetId="123" config={config} button={{ text: "Let's do this" }} />
);
