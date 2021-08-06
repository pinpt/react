import renderer from 'react-test-renderer';
import Home from '../Home';
import { Entry } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import analytics from '../__data__/testAnalytics.json';

test('Test default state', () => {
	const component = renderer.create(<Home entries={entries as Entry[]} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test default state with partial analytics', () => {
	const component = renderer.create(<Home entries={entries as Entry[]} site={site} analytics={analytics} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom latest length', () => {
	const component = renderer.create(<Home entries={entries as Entry[]} site={site} latestCount={2} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Hidden stats', () => {
	const component = renderer.create(
		<Home entries={entries as Entry[]} site={site} renderCardStatistics={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Home className="test-custom" entries={entries as Entry[]} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
