import renderer from 'react-test-renderer';
import Loader from '..';

test('Test default', () => {
	const component = renderer.create(<Loader />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Loader className="custom-test" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
