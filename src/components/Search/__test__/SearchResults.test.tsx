import renderer from 'react-test-renderer';
import Results from '../Results';
import Card from '../../ChangelogCard';
import Statistic from '../../Statistic';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';
const TEST_IMAGE = 'https://cdn.pinpoint.com/card.png';

test('Test single', () => {
	const component = renderer.create(
		<Results>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<Card.Date />}
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
				date={<Card.Date />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<Card.Date />}
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
				date={<Card.Date />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<Card.Date />}
				description={<Card.Description description={TEST_DESCRIPTION} />}
				statistics={<Statistic.Bar claps={22} views={135} />}
				button={<Card.ReadButton />}
			/>
			<Card.Container
				imageUrl={TEST_IMAGE}
				title={<Card.Title title={TEST_TITLE} />}
				date={<Card.Date />}
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
				date={<Card.Date />}
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
