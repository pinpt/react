import renderer from 'react-test-renderer';
import RoadmapCard from '../index';

test('Test default', () => {
	const component = renderer.create(
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
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no description', () => {
	const component = renderer.create(
		<RoadmapCard title="My cool feature" dueDate={999}>
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
		<RoadmapCard title="My cool feature">
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
		>
			<div>Point number 1 for the feature.</div>
			<div>Another point for the feature.</div>
			<div>The third and final thing about the cool feature.</div>
		</RoadmapCard>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
