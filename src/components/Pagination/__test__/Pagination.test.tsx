import renderer from 'react-test-renderer';
import Pagination from '..';

test('Test default (neither direction)', () => {
	const component = renderer.create(<Pagination />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test both directions', () => {
	const component = renderer.create(
		<Pagination goBack={() => console.log('back!')} goForward={() => console.log('forward!')} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test back only', () => {
	const component = renderer.create(<Pagination goBack={() => console.log('back!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test forward only', () => {
	const component = renderer.create(<Pagination goForward={() => console.log('forward!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
