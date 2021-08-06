import renderer from 'react-test-renderer';
import TagBar from '../Bar';

test('Test One Tag', () => {
	const component = renderer.create(<TagBar tags={['test-1']} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Two Tags', () => {
	const component = renderer.create(<TagBar tags={['test-1', 'test-2']} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Three Tags', () => {
	const component = renderer.create(<TagBar tags={['test-1', 'test-2', 'test-3']} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Removable', () => {
	const component = renderer.create(<TagBar removable tags={['test-1', 'test-2', 'test-3']} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
