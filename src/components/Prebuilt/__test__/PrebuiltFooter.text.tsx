import renderer from 'react-test-renderer';
import Footer from '../Footer';
import site from '../__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(<Footer site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Footer className="test-custom" site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
