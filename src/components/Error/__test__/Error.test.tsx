import renderer from 'react-test-renderer';
import Error from '..';

test('Test default', () => {
	const component = renderer.create(<Error />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom error', () => {
	const component = renderer.create(<Error error="Custom Error" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom title', () => {
	const component = renderer.create(<Error title="Custom Title" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom description', () => {
	const component = renderer.create(<Error description="Custom Description" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom link', () => {
	const component = renderer.create(<Error link={<>Custom Link</>} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
