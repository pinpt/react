import renderer from 'react-test-renderer';
import entries from '../../__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';
import Home from '../Home';

import type { IContent } from '../../../../lib/types/content';

test('Test default state', () => {
	const component = renderer.create(
		<Home
			entries={entries as IContent[]}
			site={site}
			currentEntry={entries[0].id}
			setCurrentEntry={(e) => console.log(e)}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<Home
			entries={entries as IContent[]}
			site={site}
			currentEntry={entries[0].id}
			setCurrentEntry={(e) => console.log(e)}
			className="test-custom"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom metadata', () => {
	const component = renderer.create(
		<Home
			entries={entries as IContent[]}
			site={site}
			currentEntry={entries[0].id}
			setCurrentEntry={(e) => console.log(e)}
			title="Custom Test"
			description="Test Custom"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with pagination', () => {
	const component = renderer.create(
		<Home
			entries={entries as IContent[]}
			site={site}
			previousEntry={entries[0].id}
			currentEntry={entries[1].id}
			nextEntry={entries[2].id}
			setCurrentEntry={(e) => console.log(e)}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
