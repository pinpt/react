import renderer from 'react-test-renderer';
import Logo from '../';
import { DateTime } from 'luxon';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test default state', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test extra small', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} size="xs" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test small', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} size="sm" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test medium', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} size="md" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test large', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} size="lg" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test extra large', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} size="xl" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} href="https://pinpoint.com" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link (new tab)', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} href="https://pinpoint.com" newTab />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler', () => {
	const component = renderer.create(<Logo src={IMAGE_URL} onClick={() => console.log('clicked!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler and link', () => {
	const component = renderer.create(
		<Logo src={IMAGE_URL} href="https://pinpoint.com" onClick={() => console.log('clicked!')} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
