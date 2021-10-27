import renderer from 'react-test-renderer';
import Subscribe from '..';

test('Test default state', () => {
	const component = renderer.create(<Subscribe name="" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with name', () => {
	const component = renderer.create(<Subscribe name="Pinpoint" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
