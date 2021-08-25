import React from 'react';
import { Meta } from '@storybook/react';
import Outline from '..';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
import { IContent } from '../../../../lib';
const { default: readme } = require('../README.md');

export default {
	component: Outline,
	title: 'Components/Documentation Site/Outline',
	parameters: {
		jest: ['Outline.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Outline site={site} entries={entries as IContent[]} />;

export const With_Link: React.VFC<{}> = () => (
	<Outline site={site} entries={entries as IContent[]} href={(entry) => `#${entry.id}`} newTab />
);

export const With_Click: React.VFC<{}> = () => (
	<Outline site={site} entries={entries as IContent[]} onClick={(entry) => alert(entry.title)} />
);

export const With_Active: React.VFC<{}> = () => (
	<Outline
		site={site}
		entries={entries as IContent[]}
		onClick={(entry) => alert(entry.title)}
		active="Cq4Ong4PJwMYygleMjvk"
	/>
);
