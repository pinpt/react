import renderer from 'react-test-renderer';
import Head from '../';
import type { IContent } from '../../../lib/types';
import entries from '../../Prebuilt/__data__/testEntries.json';
import site from '../../Prebuilt/__data__/testSite.json';

test('Test default render for Site', () => {
	const component = renderer.create(<Head site={site} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test default render for Content', () => {
	const component = renderer.create(<Head site={site} content={entries[0] as IContent} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test setting basePath', () => {
	const component = renderer.create(<Head site={{ ...site, basePath: '/blog' }} content={entries[0] as IContent} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
