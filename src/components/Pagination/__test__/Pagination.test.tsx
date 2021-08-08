import renderer from 'react-test-renderer';
import Pagination from '../';

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

test('Test override the go back component', () => {
	const component = renderer.create(
		<Pagination goForward={() => console.log('forward!')} goBackText="Go Backwards" />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test override the go forward component', () => {
	const component = renderer.create(<Pagination goForward={() => console.log('forward!')} goBackText="Go Forwards" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test override the go back component using default component', () => {
	const component = renderer.create(
		<Pagination
			goForward={() => console.log('forward!')}
			goBackText={<Pagination.GoBackWithArrow text="Go Back With Arrow" />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test override the go forward component using default component', () => {
	const component = renderer.create(
		<Pagination
			goForward={() => console.log('forward!')}
			goForwardText={<Pagination.GoForwardWithArrow text="Go Forward With Arrow" />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
