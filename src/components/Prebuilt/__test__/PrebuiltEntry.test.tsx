import renderer from 'react-test-renderer';
import type { IContent } from '../../../lib/types';
import PrebuiltEntry from '../Entry';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(
		<PrebuiltEntry clapCount={22} onClap={() => console.log('clap!')} content={entries[0] as IContent} site={site} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no claps', () => {
	const component = renderer.create(<PrebuiltEntry content={entries[0] as IContent} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no author', () => {
	const component = renderer.create(
		<PrebuiltEntry content={entries[0] as IContent} site={site} renderAuthor={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no authors', () => {
	const mockEnty = JSON.parse(JSON.stringify(entries[9]));
	mockEnty.authors = [];
	const component = renderer.create(<PrebuiltEntry content={mockEnty as IContent} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<PrebuiltEntry
			className="test-custom"
			clapCount={22}
			onClap={() => console.log('clap!')}
			content={entries[0] as IContent}
			site={site}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with pagination', () => {
	const component = renderer.create(
		<PrebuiltEntry
			content={entries[1] as IContent}
			site={site}
			previousEntry={entries[0] as IContent}
			nextEntry={entries[2] as IContent}
			handleSelectEntry={(entry: IContent) => console.log(`${entry.title} selected!`)}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test not zoomable', () => {
	const component = renderer.create(
		<PrebuiltEntry
			zoomable={false}
			clapCount={22}
			onClap={() => console.log('clap!')}
			content={entries[0] as IContent}
			site={site}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
