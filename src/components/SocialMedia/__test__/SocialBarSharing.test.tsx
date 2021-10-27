import renderer from 'react-test-renderer';
import EmailShare from '../Email/EmailShare';
import FacebookShare from '../Facebook/FacebookShare';
import LinkedInShare from '../LinkedIn/LinkedInShare';
import SocialMediaBar from '../SocialMediaBar';
import TwitterShare from '../Twitter/TwitterShare';

test('Test all', () => {
	const component = renderer.create(
		<SocialMediaBar>
			<FacebookShare href="https://www.facebook.com/Pinpoint.Engineering" newTab />
			<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
			<LinkedInShare href="https://linkedin.com/company/pinpoint-software" newTab />
			<EmailShare subject="hello~" body="what lovely docs ❤️" />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short', () => {
	const component = renderer.create(
		<SocialMediaBar>
			<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
			<LinkedInShare href="https://linkedin.com/company/pinpoint-software" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test single', () => {
	const component = renderer.create(
		<SocialMediaBar>
			<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Custom className', () => {
	const component = renderer.create(
		<SocialMediaBar className="custom-test">
			<TwitterShare className="custom-test" href="https://twitter.com/pinpoint_sw" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
