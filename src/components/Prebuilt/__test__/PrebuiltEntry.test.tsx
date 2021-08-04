import renderer from 'react-test-renderer';
import PrebuiltEntry from '../Entry';
import { Entry, Site } from '../../../lib';
import entries from '../__data__/testEntries.json';
import site from '../__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(
		<PrebuiltEntry clapCount={22} onClap={() => console.log('clap!')} entry={entries[0] as Entry} site={site} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no claps', () => {
	const component = renderer.create(<PrebuiltEntry entry={entries[0] as Entry} site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no author', () => {
	const component = renderer.create(
		<PrebuiltEntry entry={entries[0] as Entry} site={site} renderAuthor={() => <></>} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<PrebuiltEntry
			className="test-custom"
			clapCount={22}
			onClap={() => console.log('clap!')}
			entry={entries[0] as Entry}
			site={site}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
