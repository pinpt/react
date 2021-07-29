import renderer from 'react-test-renderer';
import Subscribe from '../';

test('Test default state', () => {
	const component = renderer.create(<Subscribe />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link', () => {
	const component = renderer.create(<Subscribe href="https://pinpoint.com" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link (new tab)', () => {
	const component = renderer.create(<Subscribe href="https://pinpoint.com" newTab />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler', () => {
	const component = renderer.create(<Subscribe onClick={() => console.log('clicked!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler and link', () => {
	const component = renderer.create(<Subscribe href="https://pinpoint.com" onClick={() => console.log('clicked!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class', () => {
	const component = renderer.create(<Subscribe className="custom-test" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom text', () => {
	const component = renderer.create(<Subscribe text="custom text value" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
