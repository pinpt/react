import renderer from 'react-test-renderer';
import Author from '..';

const AVATAR =
	'https://file.pinpoint.com/6cc744395c563f0072b339070aa327f3;UCGt%3D%3DkE~A%3FZJ6%5EhIpS%23o%5BELE3oLT0I%40t7E2;400x400.png?rw=48&rh=48';

test('Test default', () => {
	const component = renderer.create(<Author avatarUrl={AVATAR} name="Keegan" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no name', () => {
	const component = renderer.create(<Author avatarUrl={AVATAR} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Author avatarUrl={AVATAR} name="Keegan" className="custom-test" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
