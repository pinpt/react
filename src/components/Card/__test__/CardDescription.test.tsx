import renderer from 'react-test-renderer';
import Description from '../Description';

test('Test empty state', () => {
	const component = renderer.create(<Description description="" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short description', () => {
	const component = renderer.create(<Description description="Short and Sweet" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test long description', () => {
	const component = renderer.create(
		<Description description="This is description copied from the title and you would never really want this but I guess we'll show it here anyways just for you" />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class', () => {
	const component = renderer.create(<Description description="Short and Sweet" className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
