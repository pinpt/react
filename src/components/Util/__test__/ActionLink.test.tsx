import renderer from 'react-test-renderer';
import ActionLink from '../ActionLink';

test('Test default state', () => {
	const component = renderer.create(<ActionLink>👋🏼</ActionLink>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link', () => {
	const component = renderer.create(<ActionLink href="https://pinpoint.com">👋🏼</ActionLink>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link new tab', () => {
	const component = renderer.create(
		<ActionLink href="https://pinpoint.com" newTab>
			👋🏼
		</ActionLink>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler', () => {
	const component = renderer.create(<ActionLink onClick={() => console.log('hi!')}>👋🏼</ActionLink>);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler and link', () => {
	const component = renderer.create(
		<ActionLink href="https://pinpoint.com" onClick={() => console.log('hi!')}>
			👋🏼
		</ActionLink>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test className', () => {
	const component = renderer.create(
		<ActionLink href="https://pinpoint.com" className="text-className">
			👋🏼
		</ActionLink>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
