import renderer from 'react-test-renderer';
import Image from '../';

test('Test with width and height', () => {
	const component = renderer.create(<Image src="https://via.placeholder.com/150" width={150} height={150} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with no width or height', () => {
	const component = renderer.create(<Image src="https://via.placeholder.com/150" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with alt', () => {
	const component = renderer.create(<Image src="https://via.placeholder.com/150" alt="150x150 placeholder" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with className', () => {
	const component = renderer.create(
		<Image className="placeholder" src="https://via.placeholder.com/150" alt="150x150 placeholder" />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with no source', () => {
	const component = renderer.create(<Image />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with blurhash', () => {
	const component = renderer.create(
		<Image
			src="https://file.edge.pinpoint.com/46b9e86a19e11882615784ec76948241;UJC5v9%25jt6ohtntRobflayoMj%5Bj%5Ds%3FkCfioL;1328x860.png"
			alt="blurhash"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
