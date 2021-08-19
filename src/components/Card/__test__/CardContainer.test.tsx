import renderer from 'react-test-renderer';
import StatisticsBar from '../../Statistic/Bar';
import Tags from '../../Tags';
import ContentContainer from '../Container';
import DateLabel from '../../DateLabel';
import Description from '../Description';
import ReadButton from '../ReadButton';
import Title from '../Title';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';

jest.spyOn(global.Date, 'now').mockImplementation(() => 1629397284980);
jest.spyOn(global.Math, 'random').mockImplementation(() => 0.6782784632508998);

test('Test full card', () => {
	const component = renderer.create(
		<ContentContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			date={<DateLabel />}
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
		<ContentContainer
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
		<ContentContainer
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
		<ContentContainer
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
		<ContentContainer
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
		<ContentContainer
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
			<ContentContainer
				imageUrl="https://cdn.pinpoint.com/card.png"
				date={<DateLabel />}
				title={<Title title={TEST_TITLE} />}
				description={<Description description={TEST_DESCRIPTION} />}
				statistics={<StatisticsBar claps={22} views={135} />}
				button={<ReadButton />}
			/>
			<ContentContainer
				imageUrl="https://cdn.pinpoint.com/card.png"
				date={<DateLabel />}
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
