import renderer from 'react-test-renderer';
import TagItem from '../Item';

test('Test 1', () => {
	const component = renderer.create(<TagItem tag="test-1" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test 2', () => {
	const component = renderer.create(<TagItem tag="test-2" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test 3', () => {
	const component = renderer.create(<TagItem tag="test-3" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test 4', () => {
	const component = renderer.create(<TagItem tag="test-4" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test removable', () => {
	const component = renderer.create(<TagItem removable tag="test-4" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test noColor', () => {
	const component = renderer.create(<TagItem removable noColor tag="test-4" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
