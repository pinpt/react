import { Meta } from '@storybook/react';
import useContent from '../../hooks/useContent';
import { Content } from '../../../components/Renderer';
import { IPinpointConfig } from '../config';
const { default: readme } = require('./Content.README.md');
import { Title, Subtitle, Description, Primary, Stories } from '@storybook/addon-docs';

export default {
	title: 'Types/Content Types',
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
	const { content } = useContent(config, 'U359ytO97WPbOeLpTtlE');

	return <Content {...content} />;
};
