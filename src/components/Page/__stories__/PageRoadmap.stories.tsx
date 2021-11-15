import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Roadmap from '../Roadmap';
import roadmap from '../Roadmap/__data__/roadmap.json';

const { default: readme } = require('../Roadmap/README.md');

export default {
	component: Roadmap,
	title: 'Changelog Components/Page/Roadmap',
	parameters: {
		jest: ['PageRoadmap.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => {
	return <Roadmap roadmap={roadmap} />;
};

export const Default_Closed: React.VFC<{}> = () => {
	return <Roadmap roadmap={roadmap} defaultOpen={false} />;
};
