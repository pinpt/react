import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Home from '../Home';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
const { default: readme } = require('../README.md');
import { IContent } from '../../../../lib';

export default {
	component: Home,
	title: 'Documentation Components/Prebuilt/Home',
	parameters: {
		jest: ['DocumentationHome.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Full_Page: React.VFC<{}> = () => {
	const [currentEntry, setCurrentEntry] = useState(() => entries[0].id);
	const [currentAnchor, setCurrentAnchor] = useState(() => '');
	return (
		<Home
			currentEntry={currentEntry}
			setCurrentEntry={(e, anchor) => {
				setCurrentEntry(e.id);
				setCurrentAnchor(anchor);
			}}
			entries={entries as IContent[]}
			site={site}
			title="Pinpoint Documentation"
			description="Get started building with Pinpoint!"
			currentAnchor={currentAnchor}
			handleSelectHome={() => setCurrentAnchor('')}
		/>
	);
};

export const With_Pagination: React.VFC<{}> = () => {
	const [currentEntry, setCurrentEntry] = useState(() => entries[1].id);
	const [currentAnchor, setCurrentAnchor] = useState(() => '');
	return (
		<Home
			currentEntry={currentEntry}
			setCurrentEntry={(e, anchor) => {
				setCurrentEntry(e.id);
				setCurrentAnchor(anchor);
			}}
			entries={entries as IContent[]}
			site={site}
			title="Pinpoint Documentation"
			description="Get started building with Pinpoint!"
			currentAnchor={currentAnchor}
			handleSelectHome={() => setCurrentAnchor('')}
			previousEntry={entries[0].id}
			nextEntry={entries[1].id}
		/>
	);
};
