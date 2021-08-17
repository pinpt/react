import React from 'react';
import { Meta } from '@storybook/react';
import useEntries from '..';
import Prebuilt from '../../../../components/Prebuilt';
import { IPinpointConfig } from '../../../types';
import Loader from '../../../../components/Loader';
const { default: readme } = require('../README.md');

export default {
	title: 'Hooks/useEntries',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const config = {
	slug: 'pinpoint',
	siteId: 'PirxVTE94u3YmGNOySRY',
	apihost: 'api.pinpoint.com',
	pageSize: 11,
	siteUrl: 'https://changelog.pinpoint.com',
} as IPinpointConfig;

export const Hook: React.VFC<{}> = () => {
	const { content, site, loading } = useEntries(config, 0);

	if (loading) {
		return <Loader />;
	}

	return <Prebuilt.Home entries={content} site={site} />;
};
