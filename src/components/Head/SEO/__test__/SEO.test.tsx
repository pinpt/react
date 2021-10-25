import renderer from 'react-test-renderer';
import SEO from '../';
import type { IContent } from '../../../../lib/types';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';

test('Test default render', () => {
	const component = renderer.create(<SEO site={site} content={entries[0] as IContent} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test private render', () => {
	const component = renderer.create(<SEO site={{ ...site, private: true }} content={entries[0] as IContent} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test private content override render', () => {
	const component = renderer.create(
		<SEO site={site} content={{ ...(entries[0] as IContent), robots: 'invisible' }} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
