import renderer from 'react-test-renderer';
import ThemeToggle from '../';

test('Test default', () => {
	const component = renderer.create(<ThemeToggle />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test theme change listener', () => {
	const component = renderer.create(
		<ThemeToggle onThemeChange={(theme) => console.log(`The theme is now ${theme}`)} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
