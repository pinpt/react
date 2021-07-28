import renderer from 'react-test-renderer';
import Views from '../Views';

test('Test empty state', () => {
	const component = renderer.create(<Views count={0} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test large number', () => {
	const component = renderer.create(<Views count={2222} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class with large number', () => {
	const component = renderer.create(<Views count={2222} className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class with empty state', () => {
	const component = renderer.create(<Views count={0} className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});