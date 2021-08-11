import renderer from 'react-test-renderer';
import PoweredByPinpoint from '../';

test('Test powered by footer', () => {
	const component = renderer.create(<PoweredByPinpoint siteId="test-site-id" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
