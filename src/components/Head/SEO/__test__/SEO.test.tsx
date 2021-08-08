import renderer from 'react-test-renderer';
import SEO from '../';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';

import type { IContent } from '../../../../lib/types';

test('Test default render', () => {
	const component = renderer.create(<SEO site={site} content={entries[0] as IContent} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
