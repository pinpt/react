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
