import renderer from 'react-test-renderer';
import Copyright from '../../Copyright';
import Error from '../../Error';
import Footer from '../../Footer';
import Logo from '../../Logo';
import {
	SocialMediaBar,
	FacebookLink,
	InstagramLink,
	TwitterLink,
	GithubLink,
	LinkedInLink,
	RSSLink,
} from '../../SocialMedia';
import Subscribe from '../../Subscribe';
import Page from '../Error';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test full error', () => {
	const component = renderer.create(
		<Page
			error={<Error />}
			footer={
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
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no footer', () => {
	const component = renderer.create(<Page error={<Error />} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
