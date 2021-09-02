import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Home from '../Home';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
const { default: readme } = require('../README.md');
import Prebuilt from '..';
import { IContent } from '../../../../lib';

export default {
	component: Home,
	title: 'Components/Documentation Site/Prebuilt/Home',
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
		<Prebuilt.Home
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
