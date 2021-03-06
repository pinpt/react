import renderer from 'react-test-renderer';
import Recent from '../';
import Card from '../../Card';
import DateLabel from '../../DateLabel';
import Statistic from '../../Statistic';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';
const TEST_IMAGE = 'https://cdn.pinpoint.com/card.png';

test('Test single', () => {
	const component = renderer.create(
		<Recent>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Recent>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test double', () => {
	const component = renderer.create(
		<Recent>
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
		</Recent>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test triple', () => {
	const component = renderer.create(
		<Recent>
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
		</Recent>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<Recent className="test-custom">
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Recent>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test page counts', () => {
	const component = renderer.create(
		<Recent pageNumber={1} pageCount={2}>
			<Card.Container
				imageUrl="https://cdn.pinpoint.com/card.png"
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl="https://cdn.pinpoint.com/card.png"
				title={<Card.Title title={TEST_TITLE} />}
				date={<DateLabel />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
		</Recent>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test empty', () => {
	const component = renderer.create(<Recent />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
