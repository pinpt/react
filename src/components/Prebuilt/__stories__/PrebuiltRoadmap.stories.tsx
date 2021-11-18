import React from 'react';
import { Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import empty_roadmap from '../../Page/Roadmap/__data__/empty_roadmap.json';
import roadmap from '../../Page/Roadmap/__data__/roadmap.json';
import PrebuiltRoadmap from '../Roadmap';
import site from '../__data__/testSite.json';

const { default: readme } = require('../Roadmap/README.md');

export default {
	component: PrebuiltRoadmap,
	title: 'Prebuilt Components/Roadmap',
	parameters: {
		jest: ['PrebuiltRoadmap.test.tsx'],
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
	return <PrebuiltRoadmap site={site} roadmap={roadmap} enableVoting />;
};

export const Fetching: React.VFC<{}> = () => {
	return <PrebuiltRoadmap site={site} roadmap={roadmap} enableVoting fetching />;
};

export const No_Voting: React.VFC<{}> = () => {
	return <PrebuiltRoadmap site={site} roadmap={roadmap} />;
};

export const Default_Closed: React.VFC<{}> = () => {
	return <PrebuiltRoadmap site={site} roadmap={roadmap} initialOpen={false} />;
};

export const Default_Empty: React.VFC<{}> = () => {
	return <PrebuiltRoadmap site={site} roadmap={empty_roadmap} />;
};
