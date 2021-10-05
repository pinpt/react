import renderer from 'react-test-renderer';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Banner from '../';

test('Test empty state', () => {
	const component = renderer.create(<Banner />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with message', () => {
	const component = renderer.create(<Banner message="Hello world" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with message and icon', () => {
	const component = renderer.create(<Banner message="Hello world" icon={faExclamationCircle} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with children', () => {
	const component = renderer.create(<Banner>Hello World</Banner>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with className', () => {
	const component = renderer.create(<Banner className="bg-red-500 text-white">Hello World</Banner>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with closeable', () => {
	const component = renderer.create(<Banner closeable>Hello World</Banner>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with styles', () => {
	const component = renderer.create(<Banner style={{ backgroundColor: '#900', color: '#fff' }}>Hello World</Banner>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
