import React from 'react';
import { Meta } from '@storybook/react';
import SubscribeForm from '../';

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
	component: SubscribeForm,
	title: 'Components/SubscribeForm',
	parameters: {
		jest: ['SubscribeForm.test.tsx'],
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <SubscribeForm config={config} />;

export const Placeholder: React.VFC<{}> = () => <SubscribeForm config={config} placeholder="Email Address" />;

export const ButtonText: React.VFC<{}> = () => <SubscribeForm config={config} buttonText="Do it" />;

export const OnSuccess: React.VFC<{}> = () => {
	const [saved, setSaved] = React.useState(false);
	return (
		<div>
			{saved ? 'Now you have' : `You haven't saved yet`}
			<SubscribeForm config={config} buttonText="Do it" onSuccess={() => setSaved(true)} />
		</div>
	);
};

export const CustomError: React.VFC<{}> = () => <SubscribeForm config={config} renderError={(err) => err} />;
