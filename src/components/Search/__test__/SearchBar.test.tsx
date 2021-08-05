import renderer from 'react-test-renderer';
import SearchBar from '../Bar';

test('Test default', () => {
	const component = renderer.create(<SearchBar />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test change handler', () => {
	const component = renderer.create(<SearchBar onChange={(val) => console.log(`value is now ${val}`)} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test submit handler', () => {
	const component = renderer.create(<SearchBar onSubmit={(val) => console.log(`submitted with ${val}`)} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test both handlers', () => {
	const component = renderer.create(
		<SearchBar
			onSubmit={(val) => console.log(`submitted with ${val}`)}
			onChange={(val) => console.log(`value is now ${val}`)}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<SearchBar className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
