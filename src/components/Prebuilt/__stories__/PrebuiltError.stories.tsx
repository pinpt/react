import { Meta } from '@storybook/react';
import PrebuiltError from '../Error';
import site from '../__data__/testSite.json';
const { default: readme } = require('../Error/README.md');
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';

export default {
	component: PrebuiltError.NotFound,
	title: 'Prebuilt Components/Error',
	parameters: {
		jest: ['PrebuiltError.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
			page: () => (
				<>
					<Subtitle />
					<Description />
					<Primary />
					<ArgsTable story={PRIMARY_STORY} />
					<Stories />
				</>
			),
		},
	},
} as Meta;

export const NotFound: React.VFC<{}> = () => <PrebuiltError.NotFound site={site} handleLinkClick={() => alert('Go to all posts')} />;

export const InternalServerError: React.VFC<{}> = () => <PrebuiltError.InternalServerError site={site} handleLinkClick={() => alert('Go to all posts')} />;
