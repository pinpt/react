import React, { useState } from 'react';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import { ContentTemplateType, IContent } from '../../../lib/types';
import content from '../../Pinpoint/__data__/testDocumentIFramely.json';
import PrebuiltEntry from '../Entry';
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

export const Not_Zoomable: React.VFC<{}> = () => {
	const [claps, setClaps] = useState(0);
	return (
		<PrebuiltEntry
			clapCount={claps}
			onClap={() => setClaps((c) => c + 1)}
			content={entries[0] as IContent}
			site={site}
			zoomable={false}
		/>
	);
};

export const With_Iframely: React.VFC<{}> = () => {
	const [claps, setClaps] = useState(0);
	return (
		<PrebuiltEntry
			clapCount={claps}
			onClap={() => setClaps((c) => c + 1)}
			content={{
				id: '1234',
				type: ContentTemplateType.Changelog,
				document: content,
				commit: '',
				url: '',
				dateAt: 0,
				publishedAt: 0,
				authors: [{ firstName: 'Test', lastName: 'Test', id: 'test' }],
				title: 'Test',
				headline: 'testing',
			}}
			site={site}
			zoomable={false}
		/>
	);
};
