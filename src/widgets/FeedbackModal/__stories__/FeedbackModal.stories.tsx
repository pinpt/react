import React from 'react';
import { Meta } from '@storybook/react';
import FeedbackModal from '../';

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
	component: FeedbackModal,
	title: 'Widgets/Feedback Modal',
	parameters: {
		jest: ['FeedbackModal.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <FeedbackModal config={config} />;

export const Footer_Override: React.VFC<{}> = () => (
	<FeedbackModal config={config} footer={{ title: 'You can also send us email at feedback@pinpoint.com' }} />
);

export const NoDisclaimer: React.VFC<{}> = () => <FeedbackModal config={config} showDisclaimer={false} />;
