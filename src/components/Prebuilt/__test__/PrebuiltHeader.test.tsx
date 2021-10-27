import renderer from 'react-test-renderer';
import Header from '../Header';
import site from '../__data__/testSite.json';

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

test('Test custom basepath', () => {
	const component = renderer.create(<Header className="test-custom" site={{ ...site, basePath: '/blog' }} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
