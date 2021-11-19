import React from 'react';
import {
	ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle
} from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import site from '../__data__/testSite.json';
import Footer from '../Footer';

const { default: readme } = require('../Footer/README.md');

export default {
	component: Footer,
	title: 'Prebuilt Components/Footer',
	parameters: {
		jest: ['PrebuiltFooter.test.tsx'],
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
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Footer site={site} />;

export const Without_Roadmap: React.VFC<{}> = () => (
	<Footer site={{ ...site, features: { feedback: false, roadmap: false } }} />
);
