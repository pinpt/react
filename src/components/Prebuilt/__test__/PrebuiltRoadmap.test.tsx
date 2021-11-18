import renderer from 'react-test-renderer';
import empty_roadmap from '../../Page/Roadmap/__data__/empty_roadmap.json';
import roadmap from '../../Page/Roadmap/__data__/roadmap.json';
import PrebuiltRoadmap from '../Roadmap';
import site from '../__data__/testSite.json';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test full page', () => {
	const component = renderer.create(<PrebuiltRoadmap site={site} roadmap={roadmap} enableVoting />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test fetching', () => {
	const component = renderer.create(<PrebuiltRoadmap site={site} roadmap={roadmap} enableVoting fetching />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no voting', () => {
	const component = renderer.create(<PrebuiltRoadmap site={site} roadmap={roadmap} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test full page default closed', () => {
	const component = renderer.create(
		<PrebuiltRoadmap site={site} roadmap={roadmap} initialOpen={false} enableVoting />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test full page default empty', () => {
	const component = renderer.create(<PrebuiltRoadmap site={site} roadmap={empty_roadmap} enableVoting />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<PrebuiltRoadmap className="test-custom" site={site} roadmap={roadmap} enableVoting />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
