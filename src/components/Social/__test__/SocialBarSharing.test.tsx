import renderer from 'react-test-renderer';
import Bar from '../Bar';
import Facebook from '../Facebook';
import Instagram from '../Instagram';
import Twitter from '../Twitter';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import Email from '../Email';

test('Test all', () => {
	const component = renderer.create(
		<Bar>
			<Facebook sharing href="https://www.facebook.com/Pinpoint.Engineering" newTab />
			<Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
			<LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
			<Email sharing href="mailto:hello@pinpoint.com" />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short', () => {
	const component = renderer.create(
		<Bar>
			<Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
			<LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test single', () => {
	const component = renderer.create(
		<Bar>
			<Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Custom className', () => {
	const component = renderer.create(
		<Bar className="custom-test">
			<Twitter className="custom-test" sharing href="https://twitter.com/pinpoint_sw" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
