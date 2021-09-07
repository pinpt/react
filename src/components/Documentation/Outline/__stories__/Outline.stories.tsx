import React from 'react';
import { Meta } from '@storybook/react';
import Outline from '..';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
import { IContent } from '../../../../lib';
const { default: readme } = require('../README.md');

export default {
	component: Outline,
	title: 'Documentation Components/Outline',
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

export const With_Click: React.VFC<{}> = () => (
	<Outline
		site={site}
		entries={entries as IContent[]}
		onClick={(entry, hash) => alert(`${entry.title}${hash ? ` #${hash}` : ''}`)}
	/>
);

export const With_Active: React.VFC<{}> = () => (
	<Outline
		site={site}
		entries={entries as IContent[]}
		onClick={(entry, hash) => alert(`${entry.title}${hash ? ` #${hash}` : ''}`)}
		active="oroH8YQr4vufOiVTRND4"
	/>
);

export const With_Active_and_Anchor: React.VFC<{}> = () => (
	<Outline
		site={site}
		entries={entries as IContent[]}
		onClick={(entry, hash) => alert(`${entry.title}${hash ? ` #${hash}` : ''}`)}
		active="oroH8YQr4vufOiVTRND4"
		activeAnchor="Grouping-in-Planning"
	/>
);
