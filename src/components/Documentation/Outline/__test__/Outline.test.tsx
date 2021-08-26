import { DateTime } from 'luxon';
import renderer from 'react-test-renderer';
import Outline from '..';
import { IContent } from '../../../../lib/types/content';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(<Outline site={site} entries={entries as IContent[]} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with link (new tab)', () => {
	const component = renderer.create(
		<Outline site={site} entries={entries as IContent[]} href={(entry) => `#${entry?.id}`} newTab />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with link (current tab)', () => {
	const component = renderer.create(
		<Outline site={site} entries={entries as IContent[]} href={(entry) => `#${entry?.id}`} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with click handler', () => {
	const component = renderer.create(
		<Outline site={site} entries={entries as IContent[]} onClick={(entry) => console.log(entry.title)} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with active', () => {
	const component = renderer.create(
		<Outline
			site={site}
			entries={entries as IContent[]}
			onClick={(entry) => console.log(entry.title)}
			active="Cq4Ong4PJwMYygleMjvk"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
