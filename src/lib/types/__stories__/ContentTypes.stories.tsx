import { Meta } from '@storybook/react';
import useContent from '../../hooks/useContent';
import { Content } from '../../../components/Renderer';
const { default: readme } = require('./Content.README.md');

export default {
	title: 'Types/Content Types',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
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

export const Docs: React.VFC<{}> = () => {
	const { content } = useContent(
		'pinpoint',
		'PirxVTE94u3YmGNOySRY',
		'U359ytO97WPbOeLpTtlE',
		'https://changelog.pinpoint.com'
	);

	return <Content {...content} />;
};
