import renderer from 'react-test-renderer';
import Sidebar from '..';
import Author from '../../Author';
import Tags from '../../Tags';
import Clap from '../../Clap';

const AVATAR =
	'https://file.pinpoint.com/6cc744395c563f0072b339070aa327f3;UCGt%3D%3DkE~A%3FZJ6%5EhIpS%23o%5BELE3oLT0I%40t7E2;400x400.png?rw=48&rh=48';

test('Test default', () => {
	const component = renderer.create(
		<Sidebar
			author={<Author avatarUrl={AVATAR} name="Keegan" />}
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={22} handleClap={() => console.log('click!')} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no author', () => {
	const component = renderer.create(
		<Sidebar
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={22} handleClap={() => console.log('click!')} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('clap only', () => {
	const component = renderer.create(
		<Sidebar
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={22} handleClap={() => console.log('click!')} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<Sidebar
			author={<Author avatarUrl={AVATAR} name="Keegan" />}
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={22} handleClap={() => console.log('click!')} />}
			className="custom-test"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
