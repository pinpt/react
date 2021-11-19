import React, { useState } from 'react';
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

export const Default: React.VFC<{}> = () => {
	const [selectedVote, setSelectedVote] = useState(-1);
	return (
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={selectedVote}
			setSelectedVote={setSelectedVote}
			onSubmitNewSubscriber={(_email, vote) => setSelectedVote(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
};

export const With_Votes: React.VFC<{}> = () => {
	const [selectedVote, setSelectedVote] = useState(-1);
	return (
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={selectedVote}
			setSelectedVote={setSelectedVote}
			onSubmitNewSubscriber={(_email, vote) => setSelectedVote(vote)}
			enableVoting
			totalVotes={9345}
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
};

export const Loading: React.VFC<{}> = () => {
	const [selectedVote, setSelectedVote] = useState(-1);
	return (
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={selectedVote}
			setSelectedVote={setSelectedVote}
			onSubmitNewSubscriber={(_email, vote) => setSelectedVote(vote)}
			enableVoting
			totalVotes={9345}
			loading
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
};

export const No_Description: React.VFC<{}> = () => {
	const [selectedVote, setSelectedVote] = useState(-1);
	return (
		<RoadmapCard
			title="My cool feature"
			selectedVote={selectedVote}
			setSelectedVote={setSelectedVote}
			onSubmitNewSubscriber={(_email, vote) => setSelectedVote(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
};

export const No_Voting: React.VFC<{}> = () => {
	const [selectedVote, setSelectedVote] = useState(-1);
	return (
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={selectedVote}
			setSelectedVote={setSelectedVote}
			onSubmitNewSubscriber={(_email, vote) => setSelectedVote(vote)}
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
};
