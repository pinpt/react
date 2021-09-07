import renderer from 'react-test-renderer';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
import SearchResults from '../SearchResults';

import type { IContent } from '../../../../lib/types/content';

test('Test default state', () => {
	const component = renderer.create(
		<SearchResults
			site={site}
			entries={entries as IContent[]}
			searchTerm="Test"
			handleSearch={(t) => console.log(t)}
			setCurrentEntry={(id) => console.log(id)}
			handleCancelSearch={() => console.log('')}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test loading state', () => {
	const component = renderer.create(
		<SearchResults
			site={site}
			entries={entries as IContent[]}
			searchTerm="Test"
			handleSearch={(t) => console.log(t)}
			setCurrentEntry={(id) => console.log(id)}
			handleCancelSearch={() => console.log('')}
			loading
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test empty state', () => {
	const component = renderer.create(
		<SearchResults
			site={site}
			entries={[] as IContent[]}
			searchTerm="Test"
			handleSearch={(t) => console.log(t)}
			setCurrentEntry={(id) => console.log(id)}
			handleCancelSearch={() => console.log('')}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<SearchResults
			site={site}
			entries={entries as IContent[]}
			searchTerm="Test"
			handleSearch={(t) => console.log(t)}
			setCurrentEntry={(id) => console.log(id)}
			handleCancelSearch={() => console.log('')}
			className="test-custom"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
