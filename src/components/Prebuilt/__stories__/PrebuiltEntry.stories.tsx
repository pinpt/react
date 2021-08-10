import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import PrebuiltEntry from '../Entry';

const { default: readme } = require('../Entry/README.md');

import type { IContent } from '../../../lib/types';

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
		<PrebuiltEntry
			clapCount={claps}
			onClap={() => setClaps((c) => c + 1)}
			content={entries[0] as IContent}
			site={site}
		/>
	);
};

export const No_Claps: React.VFC<{}> = () => {
	return <PrebuiltEntry content={entries[0] as IContent} site={site} />;
};

export const No_Author: React.VFC<{}> = () => {
	return <PrebuiltEntry content={entries[0] as IContent} site={site} renderAuthor={() => <></>} />;
};

export const With_Pagination: React.VFC<{}> = () => {
	const [claps, setClaps] = useState(0);
	return (
		<PrebuiltEntry
			clapCount={claps}
			onClap={() => setClaps((c) => c + 1)}
			content={entries[1] as IContent}
			site={site}
			previousEntry={entries[0] as IContent}
			nextEntry={entries[2] as IContent}
			handleSelectEntry={(entry: IContent) => alert(`${entry.title} selected!`)}
		/>
	);
};
