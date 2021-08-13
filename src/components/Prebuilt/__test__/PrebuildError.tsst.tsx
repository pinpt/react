import renderer from 'react-test-renderer';
import PrebuiltError from '../Error';
import site from '../__data__/testSite.json';

test('Test default not found', () => {
	const component = renderer.create(
		<PrebuiltError.NotFound site={site} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test not found no footer', () => {
	const component = renderer.create(
		<PrebuiltError.NotFound site={site} renderFooter={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test default internal server error', () => {
	const component = renderer.create(
		<PrebuiltError.InternalServerError site={site} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test internal server error no footer', () => {
	const component = renderer.create(
		<PrebuiltError.InternalServerError site={site} renderFooter={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});