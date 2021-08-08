import { DateTime } from 'luxon';
import renderer from 'react-test-renderer';
import CardDate from '../Date';

test('Test default state', () => {
	const component = renderer.create(<CardDate />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test full format', () => {
	const component = renderer.create(<CardDate format={DateTime.DATE_FULL} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test time format', () => {
	const component = renderer.create(<CardDate format={DateTime.DATETIME_SHORT} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test huge format', () => {
	const component = renderer.create(<CardDate format={DateTime.DATETIME_HUGE_WITH_SECONDS} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test default state with custom timestamp', () => {
	const component = renderer.create(<CardDate ts={1627575055398} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test full format with custom timestamp', () => {
	const component = renderer.create(<CardDate ts={1627575055398} format={DateTime.DATE_FULL} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test time format with custom timestamp', () => {
	const component = renderer.create(<CardDate ts={1627575055398} format={DateTime.DATETIME_SHORT} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test huge format with custom timestamp', () => {
	const component = renderer.create(<CardDate ts={1627575055398} format={DateTime.DATETIME_HUGE_WITH_SECONDS} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom class', () => {
	const component = renderer.create(<CardDate className="test-custom" />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
