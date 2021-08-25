import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Home from '../Home';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
const { default: readme } = require('../README.md');
import Prebuilt from '..';
import { IContent } from '../../../../lib';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

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
	return (
		<Prebuilt.Home
			currentEntry={currentEntry}
			setCurrentEntry={(e) => setCurrentEntry(e.id)}
			entries={entries as IContent[]}
			site={site}
			title="Pinpoint Documentation"
			description="Get started building with Pinpoint!"
		/>
	);
};
