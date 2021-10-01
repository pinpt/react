import renderer from 'react-test-renderer';
import Footer from '..';
import {
	SocialMediaBar,
	FacebookLink,
	InstagramLink,
	TwitterLink,
	GithubLink,
	LinkedInLink,
	RSSLink,
} from '../../SocialMedia';
import Copyright from '../../Copyright';
import Logo from '../../Logo';
import Subscribe from '../../Subscribe';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test complete', () => {
	const component = renderer.create(
		<Footer
			social={
				<SocialMediaBar>
					<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
					<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
					<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
					<GithubLink href="https://github.com/pinpt" newTab />
					<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
					<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
				</SocialMediaBar>
			}
			copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
			subscribe={<Subscribe href="https://pinpoint.com" />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no social', () => {
	const component = renderer.create(
		<Footer
			copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
			subscribe={<Subscribe href="https://pinpoint.com" />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no subscribe', () => {
	const component = renderer.create(
		<Footer copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test social only', () => {
	const component = renderer.create(
		<Footer
			social={
				<SocialMediaBar>
					<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
					<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
					<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
					<GithubLink href="https://github.com/pinpt" newTab />
					<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
					<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
				</SocialMediaBar>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no custom class', () => {
	const component = renderer.create(
		<Footer copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
