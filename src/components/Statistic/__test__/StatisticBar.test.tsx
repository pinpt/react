import renderer from 'react-test-renderer';
import Bar from '../Bar';

test('Test empty state', () => {
	const component = renderer.create(<Bar claps={0} views={0} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test large number', () => {
	const component = renderer.create(<Bar claps={2222} views={2222} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class with large number', () => {
	const component = renderer.create(<Bar claps={2222} views={2222} className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class with empty state', () => {
	const component = renderer.create(<Bar claps={0} views={0} className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test optional props', () => {
	const component = renderer.create(<Bar />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});