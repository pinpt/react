import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import PrebuiltEntry from '../Entry';
import { Entry } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
const { default: readme } = require('../Entry/README.md');

export default {
	component: PrebuiltEntry,
	title: 'Prebuilt Components/Entry',
	parameters: {
		jest: ['PrebuiltEntry.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => {
	const [claps, setClaps] = useState(0);
	return (
		<PrebuiltEntry clapCount={claps} onClap={() => setClaps((c) => c + 1)} entry={entries[0] as Entry} site={site} />
	);
};

export const No_Claps: React.VFC<{}> = () => {
	return <PrebuiltEntry entry={entries[0] as Entry} site={site} />;
};

export const No_Author: React.VFC<{}> = () => {
	return <PrebuiltEntry entry={entries[0] as Entry} site={site} renderAuthor={() => <></>} />;
};
