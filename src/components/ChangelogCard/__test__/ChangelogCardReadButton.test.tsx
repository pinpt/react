import renderer from 'react-test-renderer';
import ReadButton from '../ReadButton';

test('Test default state', () => {
	const component = renderer.create(<ReadButton />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link', () => {
	const component = renderer.create(<ReadButton href="https://pinpoint.com"  />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link (new tab)', () => {
	const component = renderer.create(<ReadButton href="https://pinpoint.com" newTab />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler', () => {
	const component = renderer.create(<ReadButton onClick={() => alert('clicked!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link and click handler', () => {
	const component = renderer.create(<ReadButton href="https://pinpoint.com" onClick={() => alert('clicked!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<ReadButton className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});