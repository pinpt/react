import renderer from 'react-test-renderer';
import Header from '..';
import Search from '../../Search';
import Subscribe from '../../Subscribe';
import ThemeToggle from '../../ThemeToggle';

test('Test complete', () => {
	const component = renderer.create(
		<Header
			subscribe={<Subscribe href="https://pinpoint.com" />}
			title="Pinpoint Demo Changelog"
			description="See what's new in the Pinpoint Demo."
			themeToggle={<ThemeToggle />}
			search={<Search.Bar />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test empty', () => {
	const component = renderer.create(<Header />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no search', () => {
	const component = renderer.create(
		<Header
			subscribe={<Subscribe href="https://pinpoint.com" />}
			title="Pinpoint Demo Changelog"
			description="See what's new in the Pinpoint Demo."
			themeToggle={<ThemeToggle />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no theme', () => {
	const component = renderer.create(
		<Header
			subscribe={<Subscribe href="https://pinpoint.com" />}
			title="Pinpoint Demo Changelog"
			description="See what's new in the Pinpoint Demo."
			search={<Search.Bar />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no description', () => {
	const component = renderer.create(
		<Header subscribe={<Subscribe href="https://pinpoint.com" />} title="Pinpoint Demo Changelog" />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no subscribe', () => {
	const component = renderer.create(
		<Header title="Pinpoint Demo Changelog" description="See what's new in the Pinpoint Demo." />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test title only', () => {
	const component = renderer.create(<Header title="Pinpoint Demo Changelog" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
