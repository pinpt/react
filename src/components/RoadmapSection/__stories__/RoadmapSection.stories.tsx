import React from 'react';
import { Meta } from '@storybook/react';
import RoadmapSection from '../';
import RoadmapCard from '../../RoadmapCard';

const { default: readme } = require('../README.md');

export default {
	component: RoadmapSection,
	title: 'Changelog Components/Roadmap/Section',
	parameters: {
		jest: ['RoadmapSection.test.tsx'],
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
	<RoadmapSection title="Section Title" description="Some information about what this particular section contains.">
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	</RoadmapSection>
);

export const No_Description: React.VFC<{}> = () => (
	<RoadmapSection title="Section Title">
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	</RoadmapSection>
);

export const Default_Closed: React.VFC<{}> = () => (
	<RoadmapSection
		title="Section Title"
		description="Some information about what this particular section contains."
		initialOpen={false}
	>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
		<RoadmapCard title="My cool feature" description="Some interesting points about the cool feature I made.">
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	</RoadmapSection>
);

export const Empty_Section: React.VFC<{}> = () => (
	<RoadmapSection
		title="Section Title"
		description="Some information about what this particular section contains."
		initialOpen={true}
	/>
);
