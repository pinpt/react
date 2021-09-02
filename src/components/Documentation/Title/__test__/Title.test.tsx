import renderer from 'react-test-renderer';
import Title from '..';
import site from '../../../Prebuilt/__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(<Title site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom text', () => {
	const component = renderer.create(<Title site={site} text="Test Cutom Title Text" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Title site={site} className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler', () => {
	const component = renderer.create(<Title site={site} onClick={() => console.log('click!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
