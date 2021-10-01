import renderer from 'react-test-renderer';
import Card from '../../Card';
import Copyright from '../../Copyright';
import DateLabel from '../../DateLabel';
import Footer from '../../Footer';
import Header from '../../Header';
import Latest from '../../Latest';
import Logo from '../../Logo';
import Recent from '../../Recent';
import { Bar, FacebookLink, InstagramLink, TwitterLink, GithubLink, LinkedInLink, RSSLink } from '../../SocialMedia';
import Statistic from '../../Statistic';
import Subscribe from '../../Subscribe';
import Page from '../Dashboard';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';
const TEST_IMAGE = 'https://cdn.pinpoint.com/card.png';
const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test full page', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Bar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Bar>
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

test('Test loading', () => {
	const component = renderer.create(
		<Page
			loading
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Bar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Bar>
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

test('Test no header', () => {
	const component = renderer.create(
		<Page
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Bar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Bar>
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

test('Test no latest', () => {
	const component = renderer.create(
		<Page
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Bar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Bar>
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

test('Test no recent', () => {
	const component = renderer.create(
		<Page
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			footer={
				<Footer
					social={
						<Bar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Bar>
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
	const component = renderer.create(
		<Page
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
