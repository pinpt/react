import renderer from 'react-test-renderer';
import SearchResults from '../SearchResults';
import { Entry } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(<SearchResults entries={entries as Entry[]} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Hidden stats', () => {
	const component = renderer.create(
		<SearchResults entries={entries as Entry[]} site={site} renderCardStatistics={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<SearchResults className="test-custom" entries={entries as Entry[]} site={site} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
