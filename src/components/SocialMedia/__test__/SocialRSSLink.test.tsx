import renderer from 'react-test-renderer';
import SocialComponent from '../RSS/RSSLink';

test('Test default state', () => {
	const component = renderer.create(<SocialComponent />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link', () => {
	const component = renderer.create(<SocialComponent href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link (new tab)', () => {
	const component = renderer.create(
		<SocialComponent href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test click handler', () => {
	const component = renderer.create(<SocialComponent onClick={() => console.log('clicked!')} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<SocialComponent className="custom-test" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
