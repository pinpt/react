import renderer from 'react-test-renderer';
import SocialMediaBar from '../SocialMediaBar';
import FacebookLink from '../Facebook/FacebookLink';
import InstagramLink from '../Instagram/InstagramLink';
import TwitterLink from '../Twitter/TwitterLink';
import GithubLink from '../Github/GithubLink';
import LinkedInLink from '../LinkedIn/LinkedInLink';
import RSSLink from '../RSS/RSSLink';

test('Test all', () => {
	const component = renderer.create(
		<SocialMediaBar>
			<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
			<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
			<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
			<GithubLink href="https://github.com/pinpt" newTab />
			<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
			<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short', () => {
	const component = renderer.create(
		<SocialMediaBar>
			<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
			<GithubLink href="https://github.com/pinpt" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test single', () => {
	const component = renderer.create(
		<SocialMediaBar>
			<GithubLink href="https://github.com/pinpt" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Custom className', () => {
	const component = renderer.create(
		<SocialMediaBar className="custom-test">
			<GithubLink href="https://github.com/pinpt" newTab />
		</SocialMediaBar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
