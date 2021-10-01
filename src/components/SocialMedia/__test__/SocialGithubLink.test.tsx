import renderer from 'react-test-renderer';
import SocialComponent from '../Github/GithubLink';

test('Test default state', () => {
	const component = renderer.create(<SocialComponent />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link', () => {
	const component = renderer.create(<SocialComponent href="https://github.com/pinpt" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test link (new tab)', () => {
	const component = renderer.create(<SocialComponent href="https://github.com/pinpt" newTab />);
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
