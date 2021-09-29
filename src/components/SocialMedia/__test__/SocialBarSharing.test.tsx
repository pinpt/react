import renderer from 'react-test-renderer';
import Bar from '../Bar';
import FacebookShare from '../Facebook/FacebookShare';
import TwitterShare from '../Twitter/TwitterShare';
import LinkedInShare from '../LinkedIn/LinkedInShare';
import EmailShare from '../Email/EmailShare';

test('Test all', () => {
	const component = renderer.create(
		<Bar>
			<FacebookShare href="https://www.facebook.com/Pinpoint.Engineering" newTab />
			<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
			<LinkedInShare href="https://linkedin.com/company/pinpoint-software" newTab />
			<EmailShare subject="hello~" body="what lovely docs ❤️" />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short', () => {
	const component = renderer.create(
		<Bar>
			<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
			<LinkedInShare href="https://linkedin.com/company/pinpoint-software" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test single', () => {
	const component = renderer.create(
		<Bar>
			<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Custom className', () => {
	const component = renderer.create(
		<Bar className="custom-test">
			<TwitterShare className="custom-test" href="https://twitter.com/pinpoint_sw" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
