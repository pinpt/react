import renderer from 'react-test-renderer';
import site from '../__data__/testSite.json';
import Header from '../Header';

test('Test default state', () => {
	const component = renderer.create(<Header site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Header className="test-custom" site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
