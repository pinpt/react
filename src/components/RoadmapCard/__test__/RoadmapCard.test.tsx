import renderer from 'react-test-renderer';
import RoadmapCard from '../index';

test('Test default', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with votes', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
			enableVoting
			totalVotes={9345}
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test No Vote Selected', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={-1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no voting', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			selectedVote={1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no description', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			dueDate={999}
			selectedVote={1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no due date', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			selectedVote={1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<RoadmapCard
			title="My cool feature"
			description="Some interesting points about the cool feature I made."
			dueDate={999}
			className="test-custom"
			selectedVote={1}
			setSelectedVote={(vote) => console.log(vote)}
			onSubmitNewSubscriber={(_email, vote) => console.log(vote)}
			enableVoting
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
