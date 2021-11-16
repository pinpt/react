import renderer from 'react-test-renderer';
import RoadmapCard from '../../RoadmapCard';
import RoadmapSection from '../index';

test('Test default', () => {
	const component = renderer.create(
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
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no description', () => {
	const component = renderer.create(
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
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test default closed', () => {
	const component = renderer.create(
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
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test empty section', () => {
	const component = renderer.create(
		<RoadmapSection
			title="Section Title"
			description="Some information about what this particular section contains."
			initialOpen={true}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<RoadmapSection
			className="test-custom"
			title="Section Title"
			description="Some information about what this particular section contains."
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
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
