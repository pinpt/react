import renderer from 'react-test-renderer';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';
import SearchResults from '../SearchResults';

import type { IContent } from '../../../lib/types/content';

jest.spyOn(global.Date, 'now').mockImplementation(() => 1629397284980);
jest.spyOn(global.Math, 'random').mockImplementation(() => 0.6782784632508998);

test('Test default state', () => {
	const component = renderer.create(<SearchResults entries={entries as IContent[]} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Hidden stats', () => {
	const component = renderer.create(
		<SearchResults entries={entries as IContent[]} site={site} renderCardStatistics={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<SearchResults className="test-custom" entries={entries as IContent[]} site={site} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
