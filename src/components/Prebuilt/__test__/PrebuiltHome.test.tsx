import renderer from 'react-test-renderer';
import analytics from '../__data__/testAnalytics.json';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import Home from '../Home';

import type { IContent } from '../../../lib/types/content';

test('Test default state', () => {
	const component = renderer.create(<Home entries={entries as IContent[]} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test default state with partial analytics', () => {
	const component = renderer.create(<Home entries={entries as IContent[]} site={site} analytics={analytics} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom latest length', () => {
	const component = renderer.create(<Home entries={entries as IContent[]} site={site} latestCount={2} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Hidden stats', () => {
	const component = renderer.create(
		<Home entries={entries as IContent[]} site={site} renderCardStatistics={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(<Home className="test-custom" entries={entries as IContent[]} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
