import renderer from 'react-test-renderer';
import PoweredByPinpoint from '../PoweredByPinpoint';

test('Test powered by footer', () => {
	const component = renderer.create(<PoweredByPinpoint campaign="test-campaign" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});