import renderer from 'react-test-renderer';
import Card from '../../Card';
import DateLabel from '../../DateLabel';
import Statistic from '../../Statistic';
import Results from '../Results';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';
const TEST_IMAGE = 'https://cdn.pinpoint.com/card.png';

jest.spyOn(global.Date, 'now').mockImplementation(() => 1629397284980);
jest.spyOn(global.Math, 'random').mockImplementation(() => 0.6782784632508998);

test('Test single', () => {
	const component = renderer.create(
		<Results>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Results>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test double', () => {
	const component = renderer.create(
		<Results>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Results>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test triple', () => {
	const component = renderer.create(
		<Results>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Results>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<Results className="test-custom">
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Results>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test empty', () => {
	const component = renderer.create(<Results />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
