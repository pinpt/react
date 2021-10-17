import { Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import useEntries from '../';
import Loader from '../../../../components/Loader';
import PrebuiltHome from '../../../../components/Prebuilt/Home';
import { IPinpointConfig } from '../../../types';

const { default: readme } = require('../README.md');
export default {
	title: 'Hooks/useEntries',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<Stories />
				</>
			),
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
	apiKey: '1234',
} as IPinpointConfig;

export const Hook: React.VFC<{}> = () => {
	const { content, site, loading } = useEntries(config, 0);

	if (loading) {
		return <Loader />;
	}

	return <PrebuiltHome entries={content} site={site} />;
};
