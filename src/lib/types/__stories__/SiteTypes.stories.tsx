import { Meta } from '@storybook/react';
import { IPinpointConfig } from '..';
import useEntries from '../../hooks/useEntries';
const { default: readme } = require('./Site.README.md');
import Loader from '../../../components/Loader';
import Prebuilt from '../../../components/Prebuilt';
import { Title, Subtitle, Description, Primary, Stories } from '@storybook/addon-docs';

export default {
	title: 'Types/Site Types',
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
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
		viewMode: 'docs',
	},
} as Meta;
const config = {
	slug: 'pinpoint',
	siteId: 'PirxVTE94u3YmGNOySRY',
	apihost: 'api.pinpoint.com',
	pageSize: 11,
	siteUrl: 'https://changelog.pinpoint.com',
} as IPinpointConfig;

export const Docs: React.VFC<{}> = () => {
	const { content, site, loading } = useEntries(config, 0);

	if (loading) {
		return <Loader />;
	}

	return <Prebuilt.Home entries={content} site={site} />;
};
