import React from 'react';
import { Meta } from '@storybook/react';
import Head from '../';
import entries from '../../Prebuilt/__data__/testEntries.json';
import site from '../../Prebuilt/__data__/testSite.json';

const { default: readme } = require('../README.md');
import type { IContent } from '../../../lib/types';

export default {
	component: Head,
	title: 'Components/Head',
	parameters: {
		jest: ['Head.test.tsx'],
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

export const Site: React.VFC<{}> = () => <Head site={site} />;

export const Content: React.VFC<{}> = () => <Head site={site} content={entries[0] as IContent} />;

export const Additional: React.VFC<{}> = () => (
	<Head site={site} content={entries[0] as IContent}>
		<meta name="something" content="storybook" />
	</Head>
);
