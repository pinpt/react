import renderer from 'react-test-renderer';
import Verify from '..';

test('Test default state', () => {
	const component = renderer.create(<Verify verified />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test not verified state', () => {
	const component = renderer.create(<Verify />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
