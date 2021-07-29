import renderer from 'react-test-renderer';
import Title from '../Title';

test('Test empty state', () => {
	const component = renderer.create(<Title title="" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short title', () => {
	const component = renderer.create(<Title title="Short and Sweet" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test long title', () => {
	const component = renderer.create(
		<Title title="This is an absurdly long title and you would never really want this but I guess we'll show it here anyways just for you" />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class', () => {
	const component = renderer.create(<Title title="Short and Sweet" className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
