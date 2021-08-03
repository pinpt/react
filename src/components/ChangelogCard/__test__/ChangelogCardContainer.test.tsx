import renderer from 'react-test-renderer';
import StatisticsBar from '../../Statistic/Bar';
import ChangelogContainer from '../Container';
import Description from '../Description';
import Title from '../Title';
import ChangelogDate from '../Date';
import ReadButton from '../ReadButton';
import Tags from '../../Tags';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';

test('Test full card', () => {
	const component = renderer.create(
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			date={<ChangelogDate />}
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={22} views={135} />}
			button={<ReadButton />}
			tags={<Tags.Bar tags={['feature', 'improvement']} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no statistics', () => {
	const component = renderer.create(
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no title', () => {
	const component = renderer.create(
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={22} views={135} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no description', () => {
	const component = renderer.create(
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			statistics={<StatisticsBar claps={22} views={135} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no image', () => {
	const component = renderer.create(
		<ChangelogContainer
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={22} views={135} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test full card with custom class', () => {
	const component = renderer.create(
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={22} views={135} />}
			className="test-custom"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test multiple cards', () => {
	const component = renderer.create(
		<div style={{ display: 'flex', columnGap: '20px' }}>
			<ChangelogContainer
				imageUrl="https://cdn.pinpoint.com/card.png"
				date={<ChangelogDate />}
				title={<Title title={TEST_TITLE} />}
				description={<Description description={TEST_DESCRIPTION} />}
				statistics={<StatisticsBar claps={22} views={135} />}
				button={<ReadButton />}
			/>
			<ChangelogContainer
				imageUrl="https://cdn.pinpoint.com/card.png"
				date={<ChangelogDate />}
				title={<Title title={TEST_TITLE} />}
				description={<Description description={TEST_DESCRIPTION} />}
				statistics={<StatisticsBar claps={22} views={135} />}
				button={<ReadButton />}
			/>
		</div>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
