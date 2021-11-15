import React from 'react';
import { Meta } from '@storybook/react';
import RoadmapCard from '../';

const { default: readme } = require('../README.md');

export default {
	component: RoadmapCard,
	title: 'Changelog Components/Roadmap/Card',
	parameters: {
		jest: ['RoadmapCard.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
		viewMode: 'docs',
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<RoadmapCard
		title="My cool feature"
		description="Some interesting points about the cool feature I made."
		dueDate={999}
	>
		<div>Point number 1 for the feature.</div>
		<div>Another point for the feature.</div>
		<div>The third and final thing about the cool feature.</div>
	</RoadmapCard>
);

export const No_Description: React.VFC<{}> = () => (
	<RoadmapCard title="My cool feature">
		<div>Point number 1 for the feature.</div>
		<div>Another point for the feature.</div>
		<div>The third and final thing about the cool feature.</div>
	</RoadmapCard>
);
