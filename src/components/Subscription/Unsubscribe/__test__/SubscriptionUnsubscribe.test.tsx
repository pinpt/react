import renderer from 'react-test-renderer';
import Unsubscribe from '..';

test('Test default state', () => {
	const component = renderer.create(
		<Unsubscribe
			name="Pinpoint"
			logo="fileid:1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png"
			subscribed
			email="keegan@pinpoint.com"
			fileApi="https://file.pinpoint.com"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test not subscribed state', () => {
	const component = renderer.create(
		<Unsubscribe
			name="Pinpoint"
			logo="fileid:1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png"
			email="keegan@pinpoint.com"
			fileApi="https://file.pinpoint.com"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
