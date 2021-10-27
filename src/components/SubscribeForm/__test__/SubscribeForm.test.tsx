import renderer from 'react-test-renderer';
import SubscribeForm from '../';
import type { IPinpointConfig } from '../../../lib/types';

const config = {
	slug: 'pinpoint',
	siteId: 'PirxVTE94u3YmGNOySRY',
	apihost: 'api.pinpoint.com',
	pageSize: 11,
	siteUrl: 'https://changelog.pinpoint.com',
	apiKey: '1234',
} as IPinpointConfig;

test('Test default state', () => {
	const component = renderer.create(<SubscribeForm config={config} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom placeholder', () => {
	const component = renderer.create(<SubscribeForm config={config} placeholder="Email Address" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom button text', () => {
	const component = renderer.create(<SubscribeForm config={config} buttonText="Do it" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
