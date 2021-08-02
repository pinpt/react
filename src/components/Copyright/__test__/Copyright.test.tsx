import renderer from 'react-test-renderer';
import Copyright from '../';
import Logo from '../../Logo';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test with logo', () => {
	const component = renderer.create(
		<Copyright text="Copyright © 2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test without logo', () => {
	const component = renderer.create(<Copyright text="Copyright © 2021 by Pinpoint Software, Inc." />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with clickable logo', () => {
	const component = renderer.create(
		<Copyright
			text="Copyright © 2021 by Pinpoint Software, Inc."
			logo={<Logo src={IMAGE_URL} onClick={() => console.log('click!')} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with linked logo', () => {
	const component = renderer.create(
		<Copyright
			text="Copyright © 2021 by Pinpoint Software, Inc."
			logo={<Logo src={IMAGE_URL} href="https://pinpoint.com" />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test with custom className', () => {
	const component = renderer.create(
		<Copyright
			text="Copyright © 2021 by Pinpoint Software, Inc."
			logo={<Logo src={IMAGE_URL} />}
			className="test-custom"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
