import renderer from 'react-test-renderer';
import Card from '..';
import { IContent } from '../../../../lib/types/content';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';

test('Test default state', () => {
	const component = renderer.create(
		<Card
			title={entries[0].title}
			description={entries[0].headline}
			onCtaClick={() => console.log('action!')}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});